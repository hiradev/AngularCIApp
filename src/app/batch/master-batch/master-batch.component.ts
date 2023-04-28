import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Batch } from '../batch';
import { Intake } from 'src/app/intake/intake';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-master-batch',
  templateUrl: './master-batch.component.html',
  styleUrls: ['./master-batch.component.css'],
})
export class MasterBatchComponent {
  status = ['Active', 'Inactive'];
  code: any;

  @Input() batch: Batch = {
    code: '',
    name: '',
    status: '',
    intake_code: '',
  };

  constructor(
    private FormService: FormService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.FormService.getIntakeCode().subscribe((data)=>{
      this.code = data;
    })
  }

  createClass(batch: Batch) {
    //add data in the form
    this.FormService.addBatch(this.batch).subscribe((data) =>
      console.log(JSON.stringify(data))
    );
    alert(this.batch.name + ' Added');
  }

  displayTable(): void {
    this.FormService.getBatchs().subscribe((data) =>
      console.log(JSON.stringify(data))
    );
  }

  intake_code = ['Batch 001', 'Batch 002', 'Batch 003'];
}
