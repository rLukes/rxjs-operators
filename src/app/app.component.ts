import { Component, OnInit } from '@angular/core';
import { rangeOperator } from './operators/range';
import { rxjsOf } from './operators/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    rangeOperator();
    rxjsOf();
  }
}
