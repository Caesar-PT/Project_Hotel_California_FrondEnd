
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
  isLoginFailed = false;
  isSuccess = false;
  errorMessage = false;



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
          localStorage.setItem('ACCESS_TOKEN', data.token);
          localStorage.setItem('USERNAME', this.loginForm.value.username);
          this.router.navigate(['/'])
        },
        error => {
          this.loading = false;
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
          this.isSuccess = true;
        });
  }

}
