import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
export class EditHouseComponent {
  // sub: Subscription | any;
  // id: any;

  // avatar: string = "";
  // photo: Photo[] = [];

  // file: any;
  // downLoadURL: Observable<string> | undefined
  // name: string[] = [];
  // listHouseType: HouseType[] = [];
  // listHouseStatus: HouseStatus[] = [];
  // listVillage: Village[] = [];

  // houseForm = this.fb.group({
  //   name: ['', [Validators.required]],
  //   bedRoom: ['', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
  //   bathRoom: ['', [Validators.required, Validators.min(0)]],
  //   description: ['', [Validators.maxLength(400)]],
  //   priceDay: ['', [Validators.required, Validators.min(0)]],
  //   houseType: ['', [Validators.required]],
  //   houseStatus: ['', [Validators.required]],
  //   village: ['', [Validators.required]],
  //   avatar: ['', Validators.required]
  // });

  // // house: House = {
  // //   id:0,
  // //   name:"",
  // //   bedRoom:0,
  // //   bathRoom:0,
  // //   description:"",
  // //   priceDay:0,
  // //   houseType:,
  // //   houseStatus:HouseStatus,
  // //   village:Village | any,
  // //   appUser: User,
  // //   photo:Photo[],
  // //   avatar:"",
  // // }

  // constructor(private houseService: HouseService,
  //   private router: Router,
  //   private activatedRoute: ActivatedRoute,
  //   private af: AngularFireStorage,
  //   private fb: FormBuilder,
  // ) {
  //   this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     this.id = paramMap.get('id');
  //     this.getHouse(this.id);
  //   })
  // }

  // ngOnInit(): void {
  //   this.getAllList();
  // }

  // getAllList() {
  //   this.houseService.getAllHouseType().subscribe((houseType) => {
  //     this.listHouseType = houseType;
  //   });
  //   this.houseService.getAllHouseStatus().subscribe((listHouseStatus) => {
  //     this.listHouseStatus = listHouseStatus;
  //   });
  //   this.houseService.getAllVillage().subscribe((listVillage) => {
  //     this.listVillage = listVillage;
  //   });
  // }

  // getHouse(id: number) {
  //   this.houseService.getHouseById(id).subscribe(house => {
  //     // this.house = house;
  //   })
  // }

  // updateHouse() {
  //   // this.houseService.updateHouse(this.house.id, this.house).subscribe(() => {
  //     this.router.navigate(['/house']);
  //   })
  // }
  

  // // hasError(control: string, err: string) {
  // //   return this.houseForm.get(control)?.hasError(err) && this.houseForm.get(control)?.touched;
  // // }
}
