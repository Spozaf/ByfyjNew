import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OnasComponent } from './onas/onas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'onas', component: OnasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
