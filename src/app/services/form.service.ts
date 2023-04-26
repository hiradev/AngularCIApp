import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Intake } from '../intake';



@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private data:any;
  private baseURL = 'http://localhost:8080/';


    /** GET products from the server */
    getIntakes(): Observable<any> {
      return this.httpClient.get(this.baseURL,{headers: this.httpOptions.headers});
    }

     /** GET product by id. Will 404 if id not found */
    getIntake(id: string): Observable<any> {
      const url = `${this.baseURL}/master-intake/${id}`;
      return this.httpClient.get<Intake>(url);
    }

    /** POST: add a new product to the server */
    addIntake(intake: Intake) {
      return this.httpClient.post(this.baseURL + 'master-intake', intake, {
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

  showSuccess(message, title){
    this.toastr.success(message, title);
}
showError(message, title){
    this.toastr.error(message, title);
}
}
