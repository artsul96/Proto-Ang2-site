import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {LocService} from './Localisation/localisation.service';
import {ClocksComponent} from './Localisation/clocks.component';
import {LocalisationComponent} from './Localisation/localisation.component';

@NgModule({
  declarations: [
    AppComponent,
    ClocksComponent,
    LocalisationComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
