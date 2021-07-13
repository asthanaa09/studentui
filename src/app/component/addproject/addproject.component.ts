import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Project } from 'src/app/models/project.modal';
import { Student } from 'src/app/models/student.modal';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})

export class AddprojectComponent implements OnInit {

  message: string = '';
  isSubmissionSuccess: boolean = false;
  status: boolean = true;

  form: any;
  constructor(private projectService: ProjectService) { 
    // From variables
     // Setting initailvalues, and read all values from form
     this.form = new FormGroup({
      firstName   : new FormControl('', [Validators.required, Validators.minLength(2)]),
      midName     : new FormControl('', [Validators.required]),
      lastName    : new FormControl(''),
      email       : new FormControl('', [Validators.required, Validators.email]),
      projectName : new FormControl(''),
      duration    : new FormControl(''),
    });
  }

  ngOnInit(): void {
    //On loading of component show list of project
  }

  /* Add new project and student to the server 
  */
  onSubmit() {
    this.status = false;
    const values = this.form.value;
    const project: Project = {
        id: null as any,
        name: values.projectName,
        duration: values.duration,
        base64encoding: ''
    };

    const student: Student = {
      id: null as any,
      firstName: values.firstName,
      midName: values.midName,
      lastName: values.lastName,
      email: values.email,
      mobile: ''
    }

    this.projectService.addProject(project, student).subscribe(
      data => {
        this.message = data.message;
      
        if(data.httpStatusCode == 200)
            this.isSubmissionSuccess = true;
        
      },
       err => {
        this.message = err;
      }
    );
  }
}
