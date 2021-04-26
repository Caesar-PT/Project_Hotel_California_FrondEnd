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
  ts:number = 1;
  listHouse:House[] = [];
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
        this.router.navigate(['/']);
      });
    }
  }
}
