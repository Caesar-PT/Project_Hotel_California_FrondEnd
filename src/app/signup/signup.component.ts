import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // @ts-ignore
  user: User = {
    // id: 0,
    fullName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: ''
  };

  constructor(private router: Router,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
