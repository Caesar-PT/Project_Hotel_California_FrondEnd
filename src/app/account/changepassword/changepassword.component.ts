import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  user: { password: string; repassword: string } = {
    password: '',
    repassword: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
