import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../house';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  listHouse:House[] = [];
  nua:number = 2;

  constructor(private houseService: HouseService, private router: Router) { 
    this.getAllHouse();
  }

  ngOnInit(): void {
  }

  getAllHouse(){
    this.houseService.getAllHouse().subscribe((house) => {
      this.listHouse = house;
    })
  }
}
