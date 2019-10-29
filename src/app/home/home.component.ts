import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }
  
  tablet:boolean = false;
  pc:boolean = false;

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Tablet])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.tablet = true;
        }
        else{
          this.tablet = false;
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Web])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.pc = true;
          this.tablet = false;
        }
        else{
          this.pc = false;
        }
      });

      console.log(this.pc);
      console.log(this.tablet);
  }


  popUpCatering = false;
  popUpImprezy = false;
  popUpObiady = false;
  disableButtons = false;

  openPopUp(popupNumber:number) {
    switch(popupNumber){
      case 1: {
        this.popUpCatering = true;
        this.disableButtons = true;
        break;
      }
      case 2: {
        this.popUpImprezy = true;
        this.disableButtons = true;
        break;
      }
      case 3: {
        this.popUpObiady = true;
        this.disableButtons = true;
        break;
      }
    }
  }

  closePopup(popupNumber:number) {
    switch(popupNumber){
      case 1: {
        this.popUpCatering = false;
        this.disableButtons = false;
        break;
      }
      case 2: {
        this.popUpImprezy = false;
        this.disableButtons = false;
        break;
      }
      case 3: {
        this.popUpObiady = false;
        this.disableButtons = false;
        break;
      }
    }
  }

}
