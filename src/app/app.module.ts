import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { BuffetComponent } from "./buffet/buffet.component";
import { VinkortComponent } from './vinkort/vinkort.component';
import { DrinksComponent } from "./drinks/drinks.component";
import { KontaktComponent } from "./contact/kontakt.component";

import { BuffetDataService } from "./buffet/buffet-data.service";
import { VinkortDataService } from './vinkort/vinkort-data.service';
import { DrinksDataService } from './drinks/drinks-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'home', component:HomeComponent },
      { path: 'buffet', component:BuffetComponent },
      { path: 'vinkort', component:VinkortComponent },
      { path: 'drinks', component:DrinksComponent },
      { path: 'kontakt', component:KontaktComponent },
      { path: '', redirectTo:'home', pathMatch:'full' },
      { path: '**', redirectTo:'home', pathMatch:'full' }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BuffetComponent,
    VinkortComponent,
    DrinksComponent,
    KontaktComponent
  ],
  providers: [ BuffetDataService, VinkortDataService, DrinksDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
