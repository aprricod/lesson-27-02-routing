import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  param1: number;
  param2: number;
  param3: number;
  queryParam: number;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRouter.paramMap
      .pipe(switchMap((params) => params.getAll('param1')))
      .subscribe((data) => {
        this.param1 = +data;
      });
    this.activeRouter.queryParamMap
      .pipe(switchMap((params) => params.getAll('q1')))
      .subscribe((data) => {
        this.queryParam = +data;
      });
    this.activeRouter.paramMap
      .pipe(switchMap((params) => params.getAll('param2')))
      .subscribe((data) => {
        this.param2 = +data;
      });
    this.activeRouter.paramMap
      .pipe(switchMap((params) => params.getAll('param3')))
      .subscribe((data) => {
        this.param3 = +data;
      });
  }
}
