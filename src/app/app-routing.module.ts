import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { DisplayprojectsComponent } from './component/displayprojects/displayprojects.component'; 

const routes: Routes = [
 
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'projects/add', component: AddprojectComponent},
  {path: 'projects/all', component: DisplayprojectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
