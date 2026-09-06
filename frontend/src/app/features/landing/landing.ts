import { Component, ElementRef, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import * as THREE from 'three';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './landing.html',
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sceneCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private cards: THREE.Mesh[] = [];
  private animationFrameId?: number;
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();

    gsap.from('.hero-fade', {
      opacity: 0,
      y: 24,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.resizeObserver?.disconnect();
    this.renderer?.dispose();
  }

  /**
   * Builds a "floating payslip stack" scene: a grid of thin glassy cards
   * (representing individual worker payslips/records) gently rotating and
   * drifting in 3D space. This stands in for the brief's literal "3D
   * workforce globe" with an artifact more native to a payroll product.
   */
  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
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
