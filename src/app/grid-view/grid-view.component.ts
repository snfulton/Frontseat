import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  clickCounter: number = 0;
  countClick(){
    // (click)="countClick()"
    //this.clickCounter += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
