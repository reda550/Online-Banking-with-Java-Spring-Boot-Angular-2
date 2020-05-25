import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserForm } from '../Forms/userForm';
export class User{
  userId : number;
  username : string;
  firstName: string;
  lastName: string;
  //password : string;
  email: string;
  phone: string;
  enabled: string;
  primaryAccount : any;
  savingsAccount :any;
 /* appointmentList  : {};
  recipientList  : {};
  userRoles : {} ;
  authorities;
  accountNonExpired;
  accountNonLocked;
  credentialsNonExpired;*/
}

@Injectable()
export class UserService {

  constructor (private http: HttpClient){}

  getUsers(): Observable<User[]> {
    const url = "http://localhost:8080/api/user/all";
    return this.http.get<User[]>(url);
  }
  getAdmins(): Observable<User[]> {
    const url = "http://localhost:8080/api/user/admins";
    return this.http.get<User[]>(url);
  }
  Addadmin(user : UserForm){
    let url = "http://localhost:8080/api/user/addadmin"
    return this.http.post<UserForm>(url,user);
  }
   getPrimaryTransactionList(username: string) {
     let url = "http://localhost:8080/api/user/primary/transaction?username="+username;
    return this.http.get(url);
   }

   getSavingsTransactionList(username: string) {
     let url = "http://localhost:8080/api/user/savings/transaction?username="+username;
    return this.http.get(url);
   }

   enableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/enable";
     return this.http.get(url);
   }

   disableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/disable";
     return this.http.get(url);
   }

}
