import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import {CityService} from './Localisation/city.service';

import {HomeComponent} from './homesite.component';
import {ClocksComponent} from './Localisation/clocks.component';
import {LocalisationComponent} from './Localisation/localisation.component';

const appRoutes: Routes = [
  { path: 'homesite', component: HomeComponent },
  { path: 'my-clocks', component: ClocksComponent },
] 

@NgModule({
  declarations: [
    AppComponent,
    ClocksComponent,
    LocalisationComponent,
    HomeComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CityService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
