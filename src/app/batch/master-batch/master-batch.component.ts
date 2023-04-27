import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Batch } from '../batch';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-master-batch',
  templateUrl: './master-batch.component.html',
  styleUrls: ['./master-batch.component.css']
})
export class MasterBatchComponent {
  status = ['Active', 'Inactive'];
  batch_code = ['Batch 001', 'Batch 002', 'Batch 003'];
  program_code = ['Program 001', 'Program 002', 'Program 003'];

  @Input() intake: Batch = {
    batch_code: '',
    program_code: '',
    code: '',
    name: '',
    status: '',
  };

  constructor(
    private FormService: FormService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  createClass(intake: Batch) {
    this.FormService.addIntake(this.intake).subscribe((data) =>
      console.log(JSON.stringify(data))
    );
    alert(this.intake.name + ' Added');
  }

  displayTable(): void {
    this.FormService.getIntakes().subscribe((data) =>
      console.log(JSON.stringify(data))
    );
  }
}
