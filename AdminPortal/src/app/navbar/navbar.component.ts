import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


	constructor( public loginService: LoginService, private router : Router) {
  }

  ngOnInit() {

  }
  show(){
     if(this.loginService.isUserLoggedIn){
        this.router.navigate(["home"]);
    }else{
      this.router.navigate(["login"]);
    }
  }
  logout(){
    this.loginService.logOut();
    this.router.navigate(['login']);
  }
}
