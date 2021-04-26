import {Component, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HouseService} from '../house.service';
import {Oderpost} from '../oderpost';
import {Post} from '../post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-oder-house',
  templateUrl: './oder-house.component.html',
  styleUrls: ['./oder-house.component.css']
})
export class OderHouseComponent implements OnInit {
  oderPost: Oderpost = {
    id: 0,
    startDate: new Date(),
    endDate: new Date(),
    post: {
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
    }
  };
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
    sub: Subscription | undefined;
    id: number = 0;

    constructor(private postService: PostService,
                private router: Router,
                private activeRoute: ActivatedRoute) {
      this.sub = activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
      })
      this.getPostFromId(this.id);
      this.oderPost.post.house.id = this.getPostFromId(this.id).house.id;
      this.post.id = this.getPostFromId(this.id).id;
    }

    ngOnInit(): void {
    }

    createNewOder() {
      this.postService.oderPost(this.getIdPost(), this.oderPost).subscribe(() => {
        this.router.navigate(['/post']);
      })
    }
    getIdPost(){
      this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
      })
      return this.id;
    }

    getPostFromId(id: number){
      this.postService.getPostFormId(id).subscribe(post => {
        this.post = post;
        this.oderPost.post = post;
      })
      return this.post;
    }

  };
