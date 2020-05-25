import { Component, OnInit } from '@angular/core';
import {AppointmentService, Appointment} from '../Services/appointment.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { UserService, User } from 'app/Services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserForm } from 'app/Forms/userForm';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'add-admin',
  templateUrl: './add_admin.component.html',
  styleUrls: ['./add_admin.component.css']
})
export class AddAdminComponent implements OnInit
 {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      phone : '',
      username : '',
      password: '',
    });
  }
  onSubmitForm() {

    const formValue = this.userForm.value;
     const user = new UserForm(
       formValue['username'],
      formValue['password'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['phone'],
    )
    this.userService.Addadmin(user).subscribe(res =>{
      if(res != null)
      this.toastr.success('Creer avec success', 'Successfull');
      else
      this.toastr.warning('utilisateur existe deja !!', 'Failed');
    },err =>{
      console.log(err)
    }
      );
  }


}
