import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../Services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;
  invalidLogin: boolean;

	constructor (private loginservice: LoginService, private router: Router ,private toastr: ToastrService) {

  }

  onSubmit() {
      if (this.loginservice.authenticate(this.username, this.password)) {
       // this.invalidLogin = false
        this.router.navigate(['home']);
        this
      } else
        this.toastr.error('Username or Password Incorrect', 'Login Failed');
        //this.invalidLogin = true


  }

  ngOnInit() {}


}
