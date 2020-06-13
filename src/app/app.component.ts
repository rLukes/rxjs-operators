import { Component, OnInit } from '@angular/core';
import { rangeOperator } from './operators/range';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    rangeOperator();
  }
}
