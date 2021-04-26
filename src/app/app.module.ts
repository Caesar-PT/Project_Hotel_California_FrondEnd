import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ListHouseComponent} from './list-house/list-house.component';
import {EditHouseComponent} from './edit-house/edit-house.component';
import {CreateHouseComponent} from './create-house/create-house.component';
import {ListHousesComponent} from './list-houses/list-houses.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './account/signup/signup.component';
import {ListuserComponent} from './account/listuser/listuser.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UpdateuserComponent} from './account/updateuser/updateuser.component';
import {LoginComponent} from './account/login/login.component';
import { ListPostComponent } from './list-post/list-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { OderHouseComponent } from './oder-house/oder-house.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ListHouseComponent,
    EditHouseComponent,
    CreateHouseComponent,
    ListHousesComponent,
    SignupComponent,
    ListuserComponent,
    UpdateuserComponent,
    LoginComponent,
    ListPostComponent,
    CreatePostComponent,
    EditPostComponent,
    OderHouseComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
