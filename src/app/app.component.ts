import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byfyj-nowa-strona';

  constructor(
    private ccService: NgcCookieConsentService,
  ) {}
}
