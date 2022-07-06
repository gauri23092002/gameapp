import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddgamesComponent } from './addgames/addgames.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';

@NgModule({
  declarations: [
    AppComponent,
    AddgamesComponent,
    ViewgamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
