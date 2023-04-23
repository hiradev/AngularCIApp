import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-master-batch',
  templateUrl: './master-batch.component.html',
  styleUrls: ['./master-batch.component.css']
})
export class MasterBatchComponent {

  constructor(private router: Router) { }

  goToNextPage() {
    this.router.navigate(['/master-program']);
  }

  status = ['Active', 'Inactive'];
  model = new Hero(1, 'Hirusha Chamod', this.status[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }

  /////////////////////////////


}
