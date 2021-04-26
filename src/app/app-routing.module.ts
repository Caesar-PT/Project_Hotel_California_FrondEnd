
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHousesComponent } from './list-houses/list-houses.component';

const routes: Routes = [
  {
    path: '',
    component: ListHousesComponent
  }
=======

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './account/signup/signup.component';
import {ListuserComponent} from './account/listuser/listuser.component';
import {UpdateuserComponent} from './account/updateuser/updateuser.component';
import {LoginComponent} from './account/login/login.component';

const routes: Routes = [
  {
    path: 'create',
    component: SignupComponent
  },
  {
    path: '',
    component: ListuserComponent
  },
  {
    path: 'update/:id',
    component: UpdateuserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
