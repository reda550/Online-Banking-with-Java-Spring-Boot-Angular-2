import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing }  from './app.routing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './Services/login.service';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserService } from './Services/user.service';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentService } from './Services/appointment.service';
import {MatTableModule} from '@angular/material/table';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';
import { AddAdminComponent } from './add admin/add_admin.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';

import { NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AdminsComponent } from './admins/admins.component'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { AuthGaurdService } from './Services/auth-gaurd.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent,
    AppointmentComponent,
    AddAdminComponent,
    HomeComponent,
    AdminsComponent,
    FooterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    MatTableModule,
    Ng2SmartTableModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    MatButtonModule,
    MatIconModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbMenuModule,

  ],
  providers: [
    LoginService,
    UserService,
    AppointmentService,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
