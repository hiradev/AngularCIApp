import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  batch_code = ['Batch 001', 'Batch 002', 'Batch 003'];
  program_code= ['Program 001','Program 002','Program 003'];

  @Input() intake: Intake = { batch_code:'', program_code:'', code: '', name: '', status: '' };

  constructor(private FormService: FormService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {}

  createClass(intake:Intake) {
    this.FormService.addIntake(this.intake).subscribe(data=> console.log(JSON.stringify(data))); //() => this.goBack()
    // this.FormService.showSuccess(this.intake.name+" Added","");
    alert(this.intake.name+" Added");
      // this.FormService.showError("Intake error","");
    }

  displayTable():void{
    this.FormService.getIntakes().subscribe(data=> console.log(JSON.stringify(data)));
  }



}
