
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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListuserComponent,
    UpdateuserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
