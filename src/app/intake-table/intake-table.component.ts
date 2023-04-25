import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Intake} from '../intake';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-intake-table',
  templateUrl: './intake-table.component.html',
  styleUrls: ['./intake-table.component.css']
})
export class IntakeTableComponent implements OnInit{
  displayedColumns = ['batch_code', 'program_code', 'intake_code', 'name', 'status'];
  dataSource = ELEMENT_DATA;
  data: Intake[]=[];

  constructor(private route: ActivatedRoute, private FormService: FormService) { }
  ngOnInit() {
		this.getIntakes();
	}
  getIntakes(): void {
		this.FormService.getIntakes().subscribe(data => this.data = data);
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
