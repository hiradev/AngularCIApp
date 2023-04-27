import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { IntakeDataSource } from '../intake.datasource';

@Component({
  selector: 'app-table-intake',
  templateUrl: './table-intake.component.html',
  styleUrls: ['./table-intake.component.css']
})
export class TableIntakeComponent {

  displayedColumns: string[] = [
    'id',
    'batch_code',
    'program_code',
    'code',
    'name',
    'status',
  ];

  dataSource = new IntakeDataSource(this.formService);

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.dataSource.loadIntake();
  }

}
