import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sideMenuWidth:number = 0;
  tompMenuWidth:number = 100;
  constructor() { }

  ngOnInit() {
  }

  sideMenu(){
    this.sideMenuWidth = 40;
  }

  topMenu(){
    this.sideMenuWidth = 0;
  }

}
