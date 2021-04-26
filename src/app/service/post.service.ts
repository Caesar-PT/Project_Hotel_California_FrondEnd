import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:8080/post')
  }

  createPost(post: Post): Observable<Post>{
    return this.httpClient.post<Post>('http://localhost:8080/post/create', post)
  }

  updatePost(id: number, post: Post): Observable<Post>{
    return this.httpClient.put<Post>('http://localhost:8080/post/edit' + id, post)
  }

  deletePost(id: number): Observable<Post>{
    return this.httpClient.delete<Post>('http://localhost:8080/post/delete' + id)
  }

}
