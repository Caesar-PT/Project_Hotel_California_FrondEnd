import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ListHousesComponent } from './list-houses/list-houses.component';

const routes: Routes = [
  {
    path: 'house',
    component: ListHousesComponent
  },
  {
    path: 'house/create',
    component: CreateHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
