import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ListHousesComponent } from './list-houses/list-houses.component';

import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire'
import { RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';
import { LoginComponent } from './account/login/login.component';
import { UpdateuserComponent } from './account/updateuser/updateuser.component';
import { ListuserComponent } from './account/listuser/listuser.component';
import { SignupComponent } from './account/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListuserComponent,
    UpdateuserComponent,
    LoginComponent,
    ChangepasswordComponent,
    EditHouseComponent,
    CreateHouseComponent,
    ListHousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDALMl1rB7AXegtUfcsDaDwH52X11aA05g",
      authDomain: "pro1-54433.firebaseapp.com",
      databaseURL: "https://pro1-54433-default-rtdb.firebaseio.com",
      projectId: "pro1-54433",
      storageBucket: "pro1-54433.appspot.com",
      messagingSenderId: "641249356313",
      appId: "1:641249356313:web:a75fe071896e0934779888",
      measurementId: "G-8NES4NHE9X"
    }),
    AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
