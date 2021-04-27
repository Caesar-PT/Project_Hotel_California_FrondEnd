import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { House } from '../house';
import { HouseStatus } from '../house-status';
import { HouseType } from '../house-type';
import { HouseService } from '../house.service';
import { Photo } from '../photo';
import { User } from '../user';
import { Village } from '../village';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  avatar: string = "";
  photo: string[] = [];

  houseForm = this.fb.group({
    name: ['', [Validators.required]],
    bedRoom: ['', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
    bathRoom: ['', [Validators.required, Validators.min(0)]],
    description: ['', [Validators.maxLength(400)]],
    priceByDay: ['', [Validators.required, Validators.min(0)]],
    houseType: ['', [Validators.required]],
    houseStatus: ['', [Validators.required]],
    village: ['', [Validators.required]],
    avatars: ['', Validators.required]
  });

  file: any;
  downLoadURL: Observable<string> | undefined
  name: string ='';
  listHouseType: HouseType[] = [];
  listHouseStatus: HouseStatus[] = [];
  listVillage: Village[] = [];

  constructor(
    private houseService: HouseService,
    private router: Router,
    private af: AngularFireStorage,
    private fb: FormBuilder,
    private jwt: JwtService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.houseForm.patchValue(data);
      this.setValueControl('houseType', data.houseType.id);
      this.setValueControl('houseStatus', data.houseStatus.id);
      this.setValueControl('village', data.village.id);
      this.photo = data.photosList.map((p: any) => p.src);
    }
  }

  ngOnInit(): void {
    this.getAllList();
  }

  setValueControl(control: string, value: any) {
    this.houseForm.get(control)?.setValue(value);
  }

  getAllList() {
    this.houseService.getAllHouseType().subscribe((houseType) => {
      this.listHouseType = houseType;
    });
    this.houseService.getAllHouseStatus().subscribe((listHouseStatus) => {
      this.listHouseStatus = listHouseStatus;
    });
    this.houseService.getAllVillage().subscribe((listVillage) => {
      this.listVillage = listVillage;
    });
  }

  upLoad(event: any) {
    this.file = event.target.files[0];
    this.name = '/files' + Date.now() + this.file.name;
    this.uploadImage();
  }

  upLoadS(event: any) {
    // @ts-ignore
    this.avatar = event.target.files[0];
  }

  createHouse() {
    if (this.houseForm.invalid) return;
    this.saveHouse();
  }

  uploadImage() {
      const fileRef: AngularFireStorageReference = this.af.ref(
        this.name
      );
      if (this.file !== null) {
        const task = this.af.upload(this.name, this.file);
        task.percentageChanges().subscribe((e) => {
          console.log(e);
        });
        task.then(() => {
          fileRef.getDownloadURL().subscribe(url => {
            if (url) {
              this.photo.push(url);
            }
          });
        });
      }
  }

  saveHouse() {
    const house = this.houseForm.value;
    house.houseType = this.listHouseType.find(t => t.id == house.houseType);
    house.houseStatus = this.listHouseStatus.find(s => s.id == house.houseStatus);
    house.village = this.listVillage.find(v => v.id == house.village);
    house.photo = this.photo;
    house.appUser = this.jwt.currentUserValue.user;
    house.avatar = house.avatars;
    house.id = this.data?.id;
    this.houseService.createHouse(house).subscribe(() => {
      this.router.navigate(['/house']);
    });
  }

  hasError(control: string, err: string) {
    return this.houseForm.get(control)?.hasError(err) && this.houseForm.get(control)?.touched;
  }
}
