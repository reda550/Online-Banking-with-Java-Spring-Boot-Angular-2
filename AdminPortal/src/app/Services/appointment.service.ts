import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Appointment{
  id: number;
  date: Date;
  location: string;
  description: string;
  confirmed: string;
  userId:number;
  firstName: string;
  lastName: string;
}

@Injectable()
export class AppointmentService {

  constructor (private http:HttpClient){}

  getAppointmentList():Observable<any[]> {
    let url = "http://localhost:8080/api/appointment/all";
    return this.http.get<any[]>(url);
  }

  confirmAppointment(id: number) {
    let url = "http://localhost:8080/api/appointment/"+id+"/confirm";
    return this.http.get(url);
  }

}
