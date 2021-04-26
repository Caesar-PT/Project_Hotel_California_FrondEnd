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

@NgModule({
  declarations: [
    AppComponent,
    ListHouseComponent,
    EditHouseComponent,
    CreateHouseComponent,
    ListHousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
