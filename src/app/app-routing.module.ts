import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHousesComponent } from './list-houses/list-houses.component';

const routes: Routes = [
  {
    path: '',
    component: ListHousesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
