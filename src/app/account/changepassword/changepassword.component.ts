import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  // @ts-ignore
  sub: Subscription;

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
    this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
        this.user.id = Number(paraMap.get('id'));
        this.getUserById(this.user.id);
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

  resetPassword(id: number) {
    this.userService.resetPassword(this.user).subscribe(() => {

    });
    alert('Đổi mật khẩu thành công')
    this.router.navigate(['/']);

  }
}
