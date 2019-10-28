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
import { PopupComponent } from './shared-components/popup/popup.component';
import { PopUpModule } from './shared-components/popup/popup.module';
import { OnasComponent } from './onas/onas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ButtonComponent,
    FooterComponent,
    MenuComponent,
    KontaktComponent,
    OnasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
