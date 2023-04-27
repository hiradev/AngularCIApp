import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { BatchDataSource } from '../batch.datasource';

@Component({
  selector: 'app-batch-table',
  templateUrl: './batch-table.component.html',
  styleUrls: ['./batch-table.component.css']
})
export class BatchTableComponent implements OnInit  {
  dataSource = new BatchDataSource(this.formService);

  displayedColumns: string[] = [
    'batch_code',
    'program_code',
    'code',
    'name',
    'status'
  ];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.dataSource.loadIntake();
  }
}
