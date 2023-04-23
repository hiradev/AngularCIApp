import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Intake } from '../intake';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FormService {

  private baseURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

    /** GET products from the server */
    getIntakes(): Observable<Intake[]> {
      return this.httpClient.get<Intake[]>(this.baseURL + 'master-intake');
    }

     /** GET product by id. Will 404 if id not found */
    getIntake(id: string): Observable<any> {
      const url = `${this.baseURL}/master-intake/${id}`;
      return this.httpClient.get<Intake>(url);
    }

    /** POST: add a new product to the server */
    addIntake(intake: Intake) {
    //console.log(product);
      return this.httpClient.post(this.baseURL + 'master-intake', intake, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
    }

  // readAll(): Observable<any> {
  //   return this.httpClient.get(baseURL);
  // }

  // read(code): Observable<any> {
  //   return this.httpClient.get(`${baseURL}/${code}`);
  // }

  // create(data): Observable<any> {
  //   return this.httpClient.post(baseURL, data);
  // }
}
