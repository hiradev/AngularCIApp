import { MatTableDataSource } from "@angular/material/table";
import { Observable, Subscription } from "rxjs";
import { Intake } from './intake';

export class IntakeDataSource extends MatTableDataSource<Intake> {
  private intake: Intake[] = [];

  private dataList$: Subscription;

  constructor(intake: Observable<Intake>) {
    super();
    this.dataList$ = intake.subscribe(data => {
      this.intake.push(data);
      this.data = this.intake;
    });
  }

}
