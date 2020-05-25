import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddAdminComponent } from './add admin/add_admin.component';
import { HomeComponent } from './home/home.component';
import { AdminsComponent } from './admins/admins.component';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
  	path: 'login',
    component: LoginComponent,
  },
  {
  	path: 'home',
    component: HomeComponent,

  },
  {
  	path: 'admins',
    component: AdminsComponent,

  },
  {
  	path: 'addAdmin',
    component: AddAdminComponent,

  },
  {
    path: 'userAccount',
    component: UserAccountComponent,

  },
  {
    path: 'primaryTransaction/:username',
    component: PrimaryTransactionComponent,

  },
  {
    path: 'savingsTransaction/:username',
    component: SavingsTransactionComponent,

  },
  {
    path: 'appointment',
    component: AppointmentComponent,

  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routingcomponent = [LoginComponent]
