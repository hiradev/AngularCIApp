import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { IntakeDataSource } from '../intake.datasource';
import { Intake } from '../intake';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-intake-table',
  templateUrl: './intake-table.component.html',
  styleUrls: ['./intake-table.component.css'],
})
export class IntakeTableComponent {

    listIntakes!:Intake[];

    displayedColumns: string[] = [
    'batch_code',
    'program_code',
    'code',
    'name',
    'status',
  ];

  constructor(private formService: FormService) {}

  ngOnInit(){
    this.fetchIntakes();
  }

  fetchIntakes() {
    this.formService.getIntakes().subscribe(data=>{
      this.listIntakes = data
      this.dataSource = new MatTableDataSource(this.listIntakes)
      console.log('list of intakes',this.listIntakes)
    })
  }

  dataSource: any;

}

