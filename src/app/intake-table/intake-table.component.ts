import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Intake} from '../intake';
import { FormService } from '../services/form.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-intake-table',
  templateUrl: './intake-table.component.html',
  styleUrls: ['./intake-table.component.css']
})
export class IntakeTableComponent implements OnInit{
  displayedColumns = ['batch_code', 'program_code', 'intake_code', 'name', 'status'];
  dataSource;
  data: Intake[]=[];

  constructor(private route: ActivatedRoute, private FormService: FormService) { }
  ngOnInit() {
		this.FormService.getIntakes().subscribe(data => {this.dataSource = new MatTableDataSource(data);
    });
	}
}

export interface Element {
  batch_code: string;
  program_code: string;
  intake_code: string;
  name: string;
  status: string;


}

const ELEMENT_DATA: Element[] = [
  {batch_code: "1", program_code: '2', intake_code: '3', name:'Hirusha',status:'Active'}];

  export class Httpsend {
    constructor (private http: HttpClient){}

  }
