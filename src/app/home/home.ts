import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core'; 
import { CommonModule } from '@angular/common'  ;

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
router = inject(Router);

navigateToPortfolio() {
  this.router.navigate(['/portfolio']);
  }
  }