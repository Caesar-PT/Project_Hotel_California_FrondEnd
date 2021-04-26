import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from './house';
import { HouseStatus } from './house-status';
import { HouseType } from './house-type';
import { Photo } from './photo';
import { Village } from './village';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  getAllHouse(): Observable<House[]> {
    return this.http.get<House[]>('http://localhost:8080/house');
  }

  getHouseById(id: number): Observable<House> {
    return this.http.get<House>('http://localhost:8080/house/view/'+ id);
  }

  updateHouse(id: number, house: House): Observable<House> {
    return this.http.put<House>('http://localhost:8080/house/edit/' + id, house)
  }

  deleteHouse(id: number):Observable<House> {
    return this.http.delete<House>('http://localhost:8080/house/delete/ ' + id);
  }

  createHouse(house: House): Observable<House> {
    return this.http.post<House>('http://localhost:8080/house/create', house);
  }

  getAllHouseType():Observable<HouseType[]> {
    return this.http.get<HouseType[]>('http://localhost:8080/house/houseType');
  }

  getAllHouseStatus():Observable<HouseStatus[]> {
    return this.http.get<HouseStatus[]>('http://localhost:8080/house/houseStatus');
  }

  getAllVillage():Observable<Village[]> {
    return this.http.get<Village[]>('http://localhost:8080/house/village');
  }

  getAllPhoto():Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:8080/house/photo');
  }
}
