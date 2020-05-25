import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { LoginComponent } from 'app/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
              private authService: LoginService) { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                if (this.authService.isUserLoggedIn())
                  return true;

                this.router.navigate(['login']);
                return false;
  }
}
