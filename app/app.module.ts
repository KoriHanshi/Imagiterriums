import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
