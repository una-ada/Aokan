/**
 * App Module
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.06
 */

/*----- Imports --------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/*----- Module ---------------------------------------------------------------*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/*----- Exports --------------------------------------------------------------*/
export class AppModule { }
