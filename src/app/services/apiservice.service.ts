import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  constructor(private http: HttpClient) { }

  /* 
  * comon request for all post request 
  *
  **/
  post(url: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${url}`, body
    ).pipe(catchError(this.formatErrors));
  }

    /* 
  * comon request for all get request 
  *
  **/
    get(url: string, body: Object = {}): Observable<any> {
      return this.http.get(
        `${url}`
      ).pipe(catchError(this.formatErrors));
    }
}
