import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { MatTableDataSource } from '@angular/material/table';
import { Intake } from '../intake';

@Component({
  selector: 'app-intake-table',
  templateUrl: './intake-table.component.html',
  styleUrls: ['./intake-table.component.css'],
})
export class IntakeTableComponent implements OnInit {

  intake!: Intake[];

  constructor(
    private FormService: FormService
  ) {}

  ngOnInit() {
    this.fetchIntakes();
  }

  dataSource: any;

  fetchIntakes() {
    this.FormService.getIntakes().subscribe((data) => {
      this.intake = data;
      this.dataSource = new MatTableDataSource(this.intake);
      console.log('list of intakes', this.intake);
    });
  }

  displayedColumns: string[] = [
    'batch_code',
    'program_code',
    'code',
    'name',
    'status',
  ];

  // dataSource= new MatTableDataSource<Elements>(ELEMENT_DATA);
}
// export interface Elements {
//   batch_code: string;
//   program_code: string;
//   intake_code: string;
//   name: string;
//   status: string;
// }

// const ELEMENT_DATA: Elements[] = [
//   {
//     batch_code: '1',
//     program_code: '2',
//     intake_code: '3',
//     name: 'hirusha',
//     status: 'Active',
//   },
// ];
