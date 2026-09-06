import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('WorkerPay Pro');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Attempt to restore a session from the refresh-token cookie on load
    this.authService.bootstrap().subscribe();
  }
}
