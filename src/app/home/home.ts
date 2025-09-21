import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { inject } from '@angular/core'; 
import { CommonModule } from '@angular/common'  ;
=======
>>>>>>> bae4017fd56535590b2e576dbb16da5405bae532

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
<<<<<<< HEAD
export class Home {
router = inject(Router);

navigateToPortfolio() {
  this.router.navigate(['/portfolio']);
  }
  }
=======

export class Home {
  constructor(private router: Router) {}
  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
>>>>>>> bae4017fd56535590b2e576dbb16da5405bae532
