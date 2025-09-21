import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OnePhoto');
  isAdminMode = false;

  constructor(private router: Router) {}

  setIsAdminMode(value: boolean) {
    this.isAdminMode = value;
  }

  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
