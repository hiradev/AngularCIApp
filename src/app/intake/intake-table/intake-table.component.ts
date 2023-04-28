import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { IntakeDataSource } from '../intake.datasource';

@Component({
  selector: 'app-intake-table',
  templateUrl: './intake-table.component.html',
  styleUrls: ['./intake-table.component.css'],
})
export class IntakeTableComponent implements OnInit {
  dataSource = new IntakeDataSource(this.formService);

  displayedColumns: string[] = [
    // 'batch_code',
    // 'program_code',
    'code',
    'name',
    'status'
  ];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.dataSource.loadIntake();
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormService } from '../services/form.service';
// import { IntakeDataSource } from '../intake.datasource';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-intake-table',
//   templateUrl: './intake-table.component.html',
//   styleUrls: ['./intake-table.component.css'],
// })
// export class IntakeTableComponent implements OnInit {

//   public dataSource: any = [];
//   public getJsonValue:any;
//   public displayedColumns: string[] = [
//     'batch_code',
//     'program_code',
//     'code',
//     'name',
//     'status'
//   ];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getMethod();
//   }

//   public getMethod() {
//     this.http.get('http://localhost:8080/').subscribe((data)=>{
//       console.table(data);
//       this.getJsonValue = data;
//       this.dataSource = data;
//     });
//   }
// }
