import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {};
  user: User = {
    id: 0,
    fullName: '',
    username: '',
    email: '',
    password: '',
    repassword: '',
    address: '',
    phoneNumber: ''
  };

  constructor(private router: Router,
              private userService: UserService
  ) {
  }

  validation_messages = {
    username: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'maxlength', message: 'Vui lòng nhập tên > 40.'},
      {type: 'pattern', message: 'Không được nhập ký tự đặt biệt hoặc số'}
    ],
    fullName: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'maxlength', message: 'Vui lòng nhập tên > 40.'},
      {type: 'pattern', message: 'Không được nhập ký tự đặt biệt hoặc số'}
    ],
    password: [
      {type: 'required', message: 'Vui lòng password'},
      {type: 'maxlength', message: 'Vui lòng nhập password > 40.'},
    ],
    phoneNumber: [
      {type: 'required', message: 'Vui lòng nhập số điện thoại'},
      {
        type: 'pattern',
        message: 'Vui lòng nhập số địa thoại đúng định dạng 090xxxxxxx or 091xxxxxxx or (84) + 90xxxxxxx or (84) + 91xxxxxxx'
      }
    ],
    address: [
      {type: 'required', message: 'Vui lòng nhập địa chỉ'}
    ],
  };

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      if (this.user.password == ''){
        alert ("Vui lòng nhập mật khẩu");
        return false;
      }

      else if (this.user.repassword == ''){
        alert (" \n" +
          "Vui lòng nhập mật khẩu xác nhận");
        return false;
      }

      else if (this.user.password != this.user.repassword) {
        alert ("\nMật khẩu không khớp: Vui lòng thử lại ")
        return false;
      }

      else{
        return this.router.navigate(['/login']);
      }
      // return this.router.navigate(['/']);
    });
  }

  createNewUser(): void {
    this.user.username = this.form.username;
    this.user.password = this.form.password;
    this.user.address = this.form.address;
    this.user.fullName = this.form.fullName;
    this.user.email = this.form.email;
    this.user.phoneNumber = this.form.phoneNumber;
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(data => {
        this.router.navigate(['/login']);
      },
      error => {
        alert('Tài khoản đã tồn tại!');
        console.log(error);
      });
  }
}
