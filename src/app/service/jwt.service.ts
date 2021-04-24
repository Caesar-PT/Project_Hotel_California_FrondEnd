import { Injectable, EventEmitter } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserToken} from '../user-joken';
import {environment} from '../../environments/environment';

const URL_BACKEND = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;
  update = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken{
    return this.currentUserSubject.value;
  }

  login(username: string, password: string){
    return this.httpClient.post<any>(URL_BACKEND + '/user/login',{username, password})
      .pipe(map(user =>{
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.update.emit('login');
        return user;
      }))
  }

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ACCESS_TOKEN');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}
