import { ListHousesComponent } from './list-houses/list-houses.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './account/signup/signup.component';
import {ListuserComponent} from './account/listuser/listuser.component';
import {UpdateuserComponent} from './account/updateuser/updateuser.component';
import {LoginComponent} from './account/login/login.component';
import {ListPostComponent} from './list-post/list-post.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {OderHouseComponent} from './oder-house/oder-house.component';

const routes: Routes = [
  {
    path: '',
    component: ListHousesComponent
  },
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
  {
    path: "post",
    component: ListPostComponent
  },
  {
    path: "create-post",
    component: CreatePostComponent
  },
  {
    path: 'post/oder/:id',
    component: OderHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
