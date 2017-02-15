import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {ClocksComponent} from './Localisation/clocks.component';
import {LocalisationComponent} from './Localisation/localisation.component';
//C:\Users\Artur Sulski\Projekty\angular-2-beta-boilerplate-master\src\app\Localisation\clocks.component.ts
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
