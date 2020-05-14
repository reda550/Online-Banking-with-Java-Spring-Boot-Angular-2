import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  	userList: any;

	constructor(private userService: UserService, private router: Router) {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe((data : any) => {
            this.userList = [];
        		this.userList = data;
    	});
	}

	onSelectPrimary(username: string) {
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


  ngOnInit() {
  }

}
