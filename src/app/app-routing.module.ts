import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {ListuserComponent} from './listuser/listuser.component';

const routes: Routes = [
  {
    path: 'create',
    component: SignupComponent
  },
  {
    path: '',
    component: ListuserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
