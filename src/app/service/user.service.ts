import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user';
const URL_BACKEND = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(URL_BACKEND + '/user/signup', user);
  }

  getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(URL_BACKEND + '/user');
  }

  updateUser( user: User): Observable<User> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.put<User>(URL_BACKEND + '/user/update' , user , { headers: headers });
  }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(URL_BACKEND + '/user/' + `${id}`);
  }


  constructor(private httpClient: HttpClient) { }
}
