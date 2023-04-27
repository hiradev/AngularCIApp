import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) { }

  goToProgram() {
    this.router.navigate(['/master-program']);
  }

  goToBatch() {
    this.router.navigate(['/master-batch']);
  }

  goToIntake() {
    this.router.navigate(['/master-intake']);
  }
}
