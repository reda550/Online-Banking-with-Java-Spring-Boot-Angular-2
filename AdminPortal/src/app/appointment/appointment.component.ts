import { Component, OnInit } from '@angular/core';
import {AppointmentService, Appointment} from '../Services/appointment.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { AppointementCustomRendererComponent } from './custom.confirmed.component';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentList: Appointment[];

  settings = {
    hideSubHeader: true, // hide filter row
    actions: false,
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      id: {
        title: 'ID',
        type : "string"
      },
      date: {
        title: 'Date',
        type : 'date',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);
          var formatted = new DatePipe('en-En').transform(raw, 'dd-MM-yyyy HH:mm:ss');
          return formatted;
        }
      },
      location: {
        title: 'Location',
        type : "string"
      },
      description: {
        title: 'Description',
        type : "string"
      },
      confirmed: {
        title: 'Confirmed',
        type : "custom",
        renderComponent: AppointementCustomRendererComponent,

      },
      userId : {
        title: 'UserID',
        type : "string"
      },
      firstName: {
        title: 'First Name',
        type : "string"
      },
      lastName: {
        title: 'Last Name',
        type : "string"
      }
    }
  };
	constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit() {
  this.getAppointmentList();
  }
	getAppointmentList() {
		this.appointmentService.getAppointmentList().subscribe((data : any[]) => {
      this.appointmentList = [];
      data.forEach(element => {
        this.appointmentList.push({
          id : element.id,
          location : element.location,
          date : element.date,
          description : element.description,
          confirmed : element.confirmed,
          userId : element.user.userId,
          firstName : element.user.firstName,
          lastName : element.user.lastName,
        })
      });
  })
  }

	confirmAppointment(id: number) {
  		this.appointmentService.confirmAppointment(id).subscribe();
  		location.reload();
  	}


}
