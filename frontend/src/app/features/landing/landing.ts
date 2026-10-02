import { Component, ElementRef, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './landing.html',
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sceneCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer?: any;
  private scene?: any;
  private camera?: any;
  private cards: any[] = [];
  private animationFrameId?: number;
  private resizeObserver?: ResizeObserver;

  constructor(private http: HttpClient) {}

  /**
   * Wake up the backend immediately when the landing page loads.
   * Render.com free-tier spins down after 15 min — this ping starts
   * the cold boot so the server is ready by the time the user clicks
   * "Sign In" or "Get Started".
   */
  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/health`).subscribe({ error: () => {} });
  }

  ngAfterViewInit(): void {
    // Load the 3D scene and hero animations asynchronously so the page
    // renders instantly (text + buttons) without waiting for THREE.js (~600KB).
    this.initSceneAsync();
    this.initHeroAnimationAsync();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.resizeObserver?.disconnect();
    this.renderer?.dispose();
  }

  private async initHeroAnimationAsync(): Promise<void> {
    const { gsap } = await import('gsap');
    gsap.from('.hero-fade', {
      opacity: 0,
      y: 24,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }

  /**
   * Dynamically loads THREE.js and builds a "floating payslip stack" scene:
   * a grid of thin glassy cards gently rotating and drifting in 3D space.
   */
  private async initSceneAsync(): Promise<void> {
    const THREE = await import('three');
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const container = canvas.parentElement!;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    this.camera.position.set(0, 0, 14);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const colors = [0x2563eb, 0x06b6d4, 0x8b5cf6, 0x10b981];
    const cardGeometry = new THREE.BoxGeometry(2.2, 1.3, 0.06);

    const cols = 5;
    const rows = 4;
    const spacingX = 2.8;
    const spacingY = 1.9;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const color = colors[(row + col) % colors.length];
        const material = new THREE.MeshPhysicalMaterial({
          color,
          metalness: 0.15,
          roughness: 0.35,
          transmission: 0.55,
          transparent: true,
          opacity: 0.85,
        });
        const card = new THREE.Mesh(cardGeometry, material);

        card.position.x = (col - (cols - 1) / 2) * spacingX;
        card.position.y = (row - (rows - 1) / 2) * spacingY;
        card.position.z = (Math.random() - 0.5) * 4;
        card.rotation.x = (Math.random() - 0.5) * 0.3;
        card.rotation.y = (Math.random() - 0.5) * 0.3;

        // Store animation phase data on the mesh for use in the render loop
        (card as any)._floatPhase = Math.random() * Math.PI * 2;
        (card as any)._floatSpeed = 0.4 + Math.random() * 0.4;
        (card as any)._baseY = card.position.y;

        this.scene.add(card);
        this.cards.push(card);
      }
    }

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    const point1 = new THREE.PointLight(0x2563eb, 60, 50);
    point1.position.set(8, 8, 10);
    const point2 = new THREE.PointLight(0x8b5cf6, 50, 50);
    point2.position.set(-8, -6, 8);

    this.scene.add(ambient, point1, point2);

    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(container);

    this.animate();
  }

  private onResize(): void {
    if (!this.renderer || !this.camera || !this.canvasRef) return;
    const container = this.canvasRef.nativeElement.parentElement!;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    if (!this.renderer || !this.scene || !this.camera) return;

    const t = performance.now() / 1000;

    this.cards.forEach((card) => {
      const phase = (card as any)._floatPhase;
      const speed = (card as any)._floatSpeed;
      const baseY = (card as any)._baseY;
      card.position.y = baseY + Math.sin(t * speed + phase) * 0.18;
      card.rotation.z = Math.sin(t * speed * 0.5 + phase) * 0.05;
    });

    this.scene.rotation.y = Math.sin(t * 0.08) * 0.15;
    this.scene.rotation.x = Math.cos(t * 0.06) * 0.05;

    this.renderer.render(this.scene, this.camera);
  };
}

