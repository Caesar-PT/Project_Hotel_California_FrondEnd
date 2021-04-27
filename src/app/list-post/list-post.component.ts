import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Post} from '../post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {
    this.getAllPost();
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  getAllPost(): Post[]{
    this.postService.getAllPost().subscribe(posts => {
      this.posts = posts;
    })
    return this.posts;
}

}
