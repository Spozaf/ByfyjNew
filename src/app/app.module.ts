import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './shared-components/button/button.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PopUpModule } from './shared-components/popup/popup.module';
import { OnasComponent } from './onas/onas.component';

import { LayoutModule } from '@angular/cdk/layout';
import { CiasteczkaComponent } from './ciasteczka/ciasteczka.component';

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#844625'
    },
    button: {
      background: '#DDC391'
    }
  },
  theme: 'edgeless',
  type: 'info',
  "content": {
    'message': 'Ta strona używa plików cookie.',
    'dismiss': 'Lubie ciastka!',
    'deny': '',
    'link': 'Dowiedz się więcej',
    'href': '/ciasteczka',
    'policy': 'Cookie Policy'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ButtonComponent,
    FooterComponent,
    MenuComponent,
    KontaktComponent,
    OnasComponent,
    CiasteczkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopUpModule,
    LayoutModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
