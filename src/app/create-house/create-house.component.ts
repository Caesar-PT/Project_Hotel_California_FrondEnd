import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  avatar: string = "";
  photo: Photo[] = [];

  houseForm = this.fb.group({
    name: ['', [Validators.required]],
    bedRoom: ['', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
    bathRoom: ['', [Validators.required, Validators.min(0)]],
    description: ['', [Validators.maxLength(400)]],
    priceDay: ['', [Validators.required, Validators.min(0)]],
    houseType: ['', [Validators.required]],
    houseStatus: ['', [Validators.required]],
    village: ['', [Validators.required]],
    avatar: ['', Validators.required]
  });

  file: any;
  downLoadURL: Observable<string> | undefined
  name: string[] = [];
  listHouseType: HouseType[] = [];
  listHouseStatus: HouseStatus[] = [];
  listVillage: Village[] = [];

  constructor(
    private houseService: HouseService,
    private router: Router,
    private af: AngularFireStorage,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getAllList();
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
    this.file = Array.from(event.target.files);
    this.name = Array.from(event.target.files).map((file: any) => '/files' + Date.now() + file.name);
  }

  upLoadS(event: any) {
    // @ts-ignore
    this.avatar = event.target.files[0];
  }

  createHouse() {
    if (this.houseForm.invalid) return;
    this.uploadImage(); 
  }

  uploadImage() {
    this.photo = [];
    this.file.forEach((file: any, i: number) => {
      const fileRef: AngularFireStorageReference = this.af.ref(
        this.name[i]
      );
      if (this.file !== null) {
        const task = this.af.upload(this.name[i], file);
        task.percentageChanges().subscribe((e) => {
          console.log(e);
        });
        task.then(() => {
          fileRef.getDownloadURL().subscribe(url => {
            if (url) {
              this.photo.push(url);
            }
            if(this.photo.length === this.file.length) {
              this.saveHouse();
            }
          });
        });
      }
    });
  }

  saveHouse() {
    const house = this.houseForm.value;
    house.houseType = this.listHouseType.find(t => t.id == house.houseType);
    house.houseStatus = this.listHouseStatus.find(s => s.id == house.houseStatus);
    house.village = this.listVillage.find(v => v.id == house.village);
    house.photo = this.photo;
    this.houseService.createHouse(house).subscribe(()=>{
      this.router.navigate(['/house']);
    });
  }

  hasError(control: string, err: string) {
    return this.houseForm.get(control)?.hasError(err) && this.houseForm.get(control)?.touched;
  }
}
