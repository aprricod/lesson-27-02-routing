import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component11Component } from './component11/component11.component';
import { Mod1RoutingModule } from './mod1-routing.module';
import { Mod1Component } from './mod1.component';

@NgModule({
  declarations: [Mod1Component, Component11Component],
  imports: [CommonModule, Mod1RoutingModule],
  exports: [Mod1Component],
})
export class Mod1Module {}

/*
#toDo *

*/
