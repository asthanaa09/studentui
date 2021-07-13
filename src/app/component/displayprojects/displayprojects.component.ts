import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-displayprojects',
  templateUrl: './displayprojects.component.html',
  styleUrls: ['./displayprojects.component.scss']
})
export class DisplayprojectsComponent implements OnInit {

  projectListData:any = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
   this.projectService.getAllProjectList().subscribe((res)=>{
     this.projectListData = res;

   }); 
  }

  /**
   * Method used to edit project details
   * @param id  project id
   */
  editProject(id:Number){
console.log("id : ",id);
  }

}
