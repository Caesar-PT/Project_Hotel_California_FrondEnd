import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../service/post.service';
import {Router} from '@angular/router';
import {HouseService} from '../house.service';
import {House} from '../house';
import {HouseType} from '../house-type';
import {HouseStatus} from '../house-status';
import {Village} from '../village';
import {User} from '../user';
import {Photo} from '../photo';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  houses: House[] = [];

  constructor(private postService: PostService,
              private router: Router,
              private houseService: HouseService) {
    this.getALlHouse();
  }

  ngOnInit(): void {
  }

  createPost() {
    this.postService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/post']);
    });
  }
  getALlHouse() {
    this.houseService.getAllHouse().subscribe(houses => {
      this.houses = houses;
    });
    return this.houses;
  }

}
