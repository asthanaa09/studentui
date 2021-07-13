import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginRequest } from '../models/loginrequest.modal';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user.modal';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  serverURL = "http://localhost:8081/auth/login";
  user: any;

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    console.log('Comming');
    return this.http.post(`${this.serverURL}`, loginRequest)
    .pipe(catchError(this.formatErrors));
  }
}
