import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod3Module } from './mod3/mod3.module';
import { Page404Component } from './page404/page404.component';
import { Mod10Module } from './mod10/mod10.module';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [BrowserModule, AppRoutingModule, Mod3Module, Mod10Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
