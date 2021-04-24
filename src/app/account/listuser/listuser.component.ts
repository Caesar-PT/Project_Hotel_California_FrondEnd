import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  user: User[] = [];
  constructor(private router: Router,
              private userService: UserService) {
    this.showList();
  }

  ngOnInit(): void {
  }

  showList() {
    this.userService.getAllUser().subscribe(user => {
      this.user = user;
    });
  }
}
