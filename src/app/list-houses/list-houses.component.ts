import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateHouseComponent } from '../create-house/create-house.component';
import { House } from '../house';
import { HouseService } from '../house.service';
import { Photo } from '../photo';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.css']
})
export class ListHousesComponent implements OnInit {
  listHouse: House[] = [];
  listPhoto: Photo[] = [];
  constructor(
    private houseService: HouseService,
    public dialog: MatDialog,
    private commonService: CommonService,
  ) {
    this.getAllHouse();
  }

  ngOnInit(): void {
  }

  getAllHouse() {
    this.houseService.getAllHouse().subscribe((house) => {
      this.listHouse = house;
      console.log(this.listHouse);
    })
  }

  deleteHouse(id: any) {
    this.commonService.openConfirm('Bạn có muốn xóa không?').subscribe((confim) => {
      if (confim) {
        this.houseService.deleteHouse(id).subscribe(() => {
          this.getAllHouse();
        });
      }
    });
  }

  getPhotoByHouse() {
    this.houseService.getAllPhoto().subscribe((photo) => {
      this.listPhoto = photo;
    })
  }


  openForm(house?: any){
    const dialogRef = this.dialog.open(CreateHouseComponent, {
      width: '60vw',
      data: house,
    });
  }
}
