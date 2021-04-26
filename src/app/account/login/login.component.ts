
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {JwtService} from '../../service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private jwtService: JwtService) {
    console.log(this.jwtService.currentUserValue);

  }

  ngOnInit() {
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.jwtService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          localStorage.setItem('USERNAME', this.loginForm.value.username);
          this.router.navigate(['/'])
        },
        error => {
          alert("Thông tin tài khoản hoặc mật khẩu không chính xác!");
          this.loading = false;
        });
  }

}
