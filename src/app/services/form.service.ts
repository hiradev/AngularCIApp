import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Intake } from '../intake';
import { IntakeAll } from '../intakeall';


@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseURL = 'http://localhost:8080/';


    /** GET products from the server */
    getIntakes() {
      const URL = `${this.baseURL}`;
      return this.http.get<Intake[]>(URL);
    }

     /** GET product by id. Will 404 if id not found */
    getIntake(id: string): Observable<any> {
      const url = `${this.baseURL}/master-intake/${id}`;
      return this.http.get<Intake>(url);
    }

    /** POST: add a new product to the server */
    addIntake(intake: Intake) {
      return this.http.post(this.baseURL + 'master-intake', intake, {
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
