import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../service/post.service';
import {Router} from '@angular/router';
import {HouseService} from '../house.service';
import {House} from '../house';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = {
    id: 0,
    status: false,
    title: '',
    house: {
      id: 0,
      name: '',
      bedRoom: 0,
      bathRoom: 0,
      description: '',
      priceDay: 0,
      houseType: {
        id: 0,
        name: ''
      },
      houseStatus:{
        id: 0,
        name: ''
      },
      village:{
        id: 0,
        name: '',
        district: {
          id: 0,
          name: '',
          province: {
            id: 0,
            name: ''
          }
        }
      },
      appUser: {
        id: 0,
        fullName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
      },
      photo: [],
      avatar: '',
    }
  };

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
