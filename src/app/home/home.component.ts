import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
