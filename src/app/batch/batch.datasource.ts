import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Batch } from './batch';
import { DataSource } from '@angular/cdk/collections';
import { FormService } from './services/form.service';

@Injectable()
export class BatchDataSource extends DataSource<Batch> {
  data$ = new BehaviorSubject<Batch[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private formService: FormService) {
    super();
  }

  connect(): Observable<Batch[]> {
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
