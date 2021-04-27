import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src = '';
  @Input() height: string = '250px';

  constructor() { }

  ngOnInit(): void {
  }

}
