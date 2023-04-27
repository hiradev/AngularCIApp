import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Intake } from './intake';
import { DataSource } from '@angular/cdk/collections';
import { FormService } from './services/form.service';

@Injectable()
export class IntakeDataSource extends DataSource<Intake> {
  data$ = new BehaviorSubject<Intake[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private formService: FormService) {
    super();
  }

  connect(): Observable<Intake[]> {
    // return this.data$.asObservable();
    console.log(this.formService.getIntakes());
    return this.formService.getIntakes();
  }

  disconnect(): void {
    this.data$.complete();
  }

  loadIntake(): void {
    this.isLoading$.next(true);
    this.formService.getIntakes().subscribe((data) => {
      this.data$.next(data);
      this.isLoading$.next(false);
      console.table(data);
    });
  }
}
