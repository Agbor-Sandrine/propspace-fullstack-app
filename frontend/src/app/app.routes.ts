import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

import { PropertyListComponent } from './properties/property-list/property-list';

import { PropertyCreateComponent } from './properties/property-create/property-create';

import { MyProperties } from './properties/my-properties/my-properties';

export const routes: Routes = [

  {
    path: '',
    component: PropertyListComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'create-property',
    component: PropertyCreateComponent
  },

  {
    path: 'my-properties',
    component: MyProperties
  }

];