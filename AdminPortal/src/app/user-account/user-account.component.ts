import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../Services/user.service';
import { ThrowStmt } from '@angular/compiler';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit,OnChanges {
  	userList: User[];

  settings = {
    hideSubHeader: true, // hide filter row
    actions: false,
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      userId: {
        title: 'ID',
        type: 'string',
      },
      username: {
        title: 'User Name',
        type: 'string',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      enabled: {
        title: 'Enabled',
        type: 'string',
      },
      primaryAccount: {
        title: 'Primary Account',
        type: 'string',
      },
      savingsAccount: {
        title: 'Saving Account',
        type: 'string',
      },
    }
  };
	constructor(private userService: UserService, private router: Router){
    this.getUsers();
  }
  ngOnChanges(): void {

  }

  ngOnInit() {

  }
	getUsers() {
		this.userService.getUsers().toPromise().then((data : User[]) => {
            this.userList = [];
            console.log(data);
            data.forEach(elem =>{
              this.userList.push({
              userId : elem.userId ,
              username : elem.username,
              firstName : elem.firstName,
              lastName : elem.lastName,
              email : elem.email,
              phone : elem.phone,
              primaryAccount : elem.primaryAccount.id,
              savingsAccount : elem.savingsAccount.id,
              enabled : elem.enabled,
            })
            });
      });
	}

	onSelectPrimary(username: string){
    	this.router.navigate(['/primaryTransaction', username]);
  	}

  	onSelectSavings(username: string) {
    	this.router.navigate(['/savingsTransaction', username]);
  	}

  	enableUser(username: string) {
  		this.userService.enableUser(username).subscribe();
  		location.reload();
  	}

  	disableUser(username: string) {
  		this.userService.disableUser(username).subscribe();
  		location.reload();
  	}




}
