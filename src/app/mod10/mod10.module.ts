import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Mod10Component } from './mod10.component';
import { Mod10Service } from './mod10.service';

@NgModule({
  declarations: [Mod10Component],
  imports: [CommonModule, HttpClientModule],
  providers: [Mod10Service],
  exports: [Mod10Component],
})
export class Mod10Module {}
