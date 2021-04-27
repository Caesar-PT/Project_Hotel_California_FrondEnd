import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { House } from '../house';
import { HouseStatus } from '../house-status';
import { HouseType } from '../house-type';
import { HouseService } from '../house.service';
import { Photo } from '../photo';
import { User } from '../user';
import { Village } from '../village';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {
  houseType!: HouseType;
  houseStatus!:HouseStatus;
  village!:Village;
  appUser!: User;
  photo!:Photo[];
  sub: Subscription | any;
  id: any;

  house: House = {
    id: 0,
    name:"",
    bedRoom:0,
    bathRoom:0,
    description:"",
    priceDay:0,
    houseType:this.houseType,
    houseStatus:this.houseStatus,
    village:this.village,
    appUser: this.appUser,
    photo:this.photo,
    avatar:""
  };

  constructor(private houseService:HouseService, private router:Router, private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getHouse(this.id);
    })
   }

  ngOnInit(): void {
  }

  getHouse(id:number){
    this.houseService.getHouseById(id).subscribe(house =>{
      this.house = house;
    })
  }

  updateHouse(){
    this.houseService.updateHouse(this.house.id, this.house).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
