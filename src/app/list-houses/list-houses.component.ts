import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../house';
import { HouseService } from '../house.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.css']
})
export class ListHousesComponent implements OnInit {
  listHouse:House[] = [];
  listPhoto:Photo[] = [];
  constructor(private houseService: HouseService, private router: Router) {
    this.getAllHouse();
   }

  ngOnInit(): void {
  }

  getAllHouse(){
    this.houseService.getAllHouse().subscribe((house) => {
      this.listHouse = house;
      console.log(this.listHouse);
    })
  }

  deleteHouse(id: any) {
    if (confirm('You want delete?')) {
      this.houseService.deleteHouse(id).subscribe(() => {
        this.getAllHouse();
        this.router.navigate(['/house']);
      });
    }
  }

  getPhotoByHouse(){
    this.houseService.getAllPhoto().subscribe((photo) => {
      this.listPhoto = photo;
    })
  }

  
}
