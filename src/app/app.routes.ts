import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portfolio', component: Portfolio },
  //{ path: 'about', component: AboutComponent },
  //{ path: 'contact', component: ContactComponent },
  //{ path: 'admin', component: AdminDashboardComponent },
  //{ path: '**', redirectTo: '', pathMatch: 'full' }
];
