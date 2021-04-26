import {Component, OnInit} from '@angular/core';
import {User} from '../../user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  // @ts-ignore
  sub: Subscription;
  // form: any = {};

  user: User = {
    id: 0,
    fullName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: ''
  };

  constructor(private router: Router,
              private userService: UserService,
              private activatedRouter: ActivatedRoute,
  ) {
    this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) =>{
        this.user.id = Number(paraMap.get('id'));
        this.getUserById(this.user.id)
      }
    );
  }

  ngOnInit(): void {

  }

  private getUserById(id: number) {
    this.userService.getUserById(id).subscribe(a => {
      this.user = a;
    });
  }

  updateUser(id:number){
    this.userService.updateUser(id,this.user).subscribe(() =>{
      this.router.navigate(['/'])
    });
  }
}
