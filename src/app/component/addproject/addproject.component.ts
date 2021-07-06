import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project.modal';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})

export class AddprojectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    //On loading of component show list of project

  }

  onSubmit(): void {
    console.log('__________working  ');
  }

}
