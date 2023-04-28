import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Batch } from '../batch';
import { Intake } from 'src/app/intake/intake';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseURL = 'http://localhost:8080/master-batch/';
  private intakeURL = 'http://localhost:8080/';


    /** GET code from the intake */
    getIntakeCode() {
      const URL = `${this.intakeURL}`;
      return this.http.get<Intake[]>(URL);
    }


    /** GET products from the batch */
    getBatchs() {
      const URL = `${this.baseURL}`;
      return this.http.get<Batch[]>(URL);
    }

     /** GET product by id. Will 404 if id not found */
    getIntake(id: string): Observable<any> {
      const url = `${this.baseURL}/${id}`;
      return this.http.get<Batch>(url);
    }

    /** POST: add a new product to the server */
    addBatch(batch: Batch) {
      return this.http.post(this.baseURL, batch, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'string' as 'json'
      });
    }



  // readAll(): Observable<any> {
  //   return this.httpClient.get(baseURL);
  // }

  // read(code): Observable<any> {
  //   return this.httpClient.get(`${baseURL}/${id}`);
  // }

  // create(intake: Intake): Observable<any> {
  //   return this.httpClient.post(this.baseURL, intake);
  // }

}
