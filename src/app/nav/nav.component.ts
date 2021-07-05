import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  activeIndex : number = 1;

  clicked(index: number){
    this.activeIndex = index;
  }

  isActive(index: number) {
    return this.activeIndex === index;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
