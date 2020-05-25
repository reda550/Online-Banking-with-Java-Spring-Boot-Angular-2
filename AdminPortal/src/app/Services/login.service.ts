import { Injectable } from '@angular/core';

import {Observable}     from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  authenticate(username, password) {
    if (username === "Admin" || username===
      "reda" && password === "123456") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return user != null ? true : false

  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
