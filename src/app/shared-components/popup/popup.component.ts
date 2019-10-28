import { Component, OnInit, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class PopupComponent implements OnInit {

  @Input() isOpen:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  

}
