import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHouseComponent } from './list-house/list-house.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ListHousesComponent } from './list-houses/list-houses.component';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './account/signup/signup.component';
import {ListuserComponent} from './account/listuser/listuser.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateuserComponent } from './account/updateuser/updateuser.component';
import { LoginComponent } from './account/login/login.component';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';

@NgModule({
  declarations: [
    ListHouseComponent,
    EditHouseComponent,
    CreateHouseComponent,
    ListHousesComponent
    SignupComponent,
    ListuserComponent,
    UpdateuserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
