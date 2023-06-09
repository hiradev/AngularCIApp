import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Intake } from '../intake';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-master-intake',
  templateUrl: './master-intake.component.html',
  styleUrls: ['./master-intake.component.css'],
})
export class MasterIntakeComponent implements OnInit {
  status = ['Active', 'Inactive'];

  @Input() intake: Intake = {
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

  createClass(intake: Intake) {
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
