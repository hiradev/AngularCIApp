import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import {Intake} from '../intake';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-master-intake',
  templateUrl: './master-intake.component.html',
  styleUrls: ['./master-intake.component.css']
})


export class MasterIntakeComponent implements OnInit{

  status = ['Active', 'Inactive'];
  @Input() intake: Intake = { id: '', code: '', name: '', status: '' };

  constructor(private FormService: FormService, private location: Location) { }

  ngOnInit() {}

  createClass(): void {
    this.FormService.addIntake(this.intake).subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }




  // onSubmit() { this.submitted = true; }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}


  /////////////////////////////



}
