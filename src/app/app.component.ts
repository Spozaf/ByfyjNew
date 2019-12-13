import { Component, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'byfyj-nowa-strona';

  constructor(
    private ccService: NgcCookieConsentService,
    private facebookService: FacebookService
  ) {}

  ngOnInit(): void {
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v5.0'};
    this.facebookService.init(initParams);
  }
}
