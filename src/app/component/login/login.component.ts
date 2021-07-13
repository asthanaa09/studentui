import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { LoginRequest } from 'src/app/models/loginrequest.modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: any;
  loginRequest: any; //LoginRequest;

  constructor(private loginService: LoginService) { 

    // Setting initailvalues, and read all values from form
    this.authForm = new FormGroup({
      username : new FormControl('', [Validators.required, Validators.minLength(3)]),
      password : new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    // On loading of component, do initialization
  }

  login(): void {
    // Inthe credential all form values are presents
    const credentials:LoginRequest  = this.authForm.value;
   
    console.log("Username " + credentials.username + ", password " + credentials.password);
    this.loginService.login(credentials).subscribe(data => {
      // TODO: Show status to the UI
      console.log(JSON.stringify(data));
    });
  }
}
