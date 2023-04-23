import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  constructor(private router: Router) { }

  goToProgramPage() {
    this.router.navigate(['/master-program']);
  }

  goToIntakePage() {
    this.router.navigate(['/master-intake']);
  }

  goToBatchPage() {
    this.router.navigate(['/master-batch']);
  }
}
