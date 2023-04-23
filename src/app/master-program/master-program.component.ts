import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-master-program',
  templateUrl: './master-program.component.html',
  styleUrls: ['./master-program.component.css']
})
export class MasterProgramComponent {

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
