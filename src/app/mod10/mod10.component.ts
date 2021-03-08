import { Component, OnInit } from '@angular/core';
import { Mod10Service } from './mod10.service';

@Component({
  selector: 'app-mod10',
  templateUrl: './mod10.component.html',
  styleUrls: ['./mod10.component.css'],
})
export class Mod10Component implements OnInit {
  constructor(public mod10: Mod10Service) {}

  ngOnInit(): void {
    this.mod10.loadUser();
    this.mod10.loadPosts();
    this.mod10.loadPost101();
  }
}