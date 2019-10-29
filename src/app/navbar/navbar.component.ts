import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sideMenuWidth:number = 0;
  tompMenuWidth:number = 100;
  constructor(public breakpointObserver: BreakpointObserver) { }

  tablet:boolean = false;

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.tablet = true;
        }
        else{
          this.tablet = false;
        }
      });
  }

  sideMenu(){
    this.sideMenuWidth = 40;
  }

  topMenu(){
    this.sideMenuWidth = 0;
  }

}
