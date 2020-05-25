import { Component, Input, OnInit, Inject } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { AppointmentService } from 'app/Services/appointment.service';
import { DOCUMENT } from '@angular/common';

@Component({
  template: `
    <div style="cursor: pointer; color : Blue"(click)="confirme()" >
        {{value}}
    </div>
  `,
})
export class AppointementCustomRendererComponent implements ViewCell, OnInit {

  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object
   constructor(private service : AppointmentService , @Inject(DOCUMENT) private _document: Document){}
  ngOnInit(): void {

    }
    public confirme(){
      this.service.confirmAppointment(this.rowData.id).subscribe();
      this._document.defaultView.location.reload();
    }
}
