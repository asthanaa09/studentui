import { Injectable } from '@angular/core';
import { ApiService } from './apiservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Project } from '../models/project.modal';
import { Student } from '../models/student.modal';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../models/response.modal';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  
  apiURL: string = '/api/project';  


  constructor(private apiService: ApiService) { }

  addProject(project: Project, student: Student): Observable<Response> {
    
    var url = environment.serverURL + this.apiURL;
    url += '?firstName=' + student.firstName + '&email=' + student.email;
    
    if(student.midName)
        url += '&midName=' + student.midName;
    if(student.lastName)
        url += '&lastName=' + student.lastName;
        
     return  this.apiService.post(url, project).pipe(
      map(
        data => {
          console.log('Successfully added Project');
          return data;
        }
      ));
  }

  getAllProjectList(): Observable<Response> {
    var url = environment.serverURL + this.apiURL;
    return  this.apiService.get(`${url}/all`).pipe(
      map(
        data => {
          console.log('Successfully added Project');
          return data;
        }
      ));  
  }
}
