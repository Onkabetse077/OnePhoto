import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  setIsAdminMode(value: boolean) {
    this.isAdminMode = value;
  }
}
