import { Component, OnInit } from '@angular/core';
import { rangeOperator } from './operators/range';
import { rxjsOf } from './operators/of';
import { rxjsFrom } from './operators/from';
import { rxjsInterval, rxjsTimer } from './operators/interval-timer';
import { rxjsMap, rxjsMapTo } from './operators/map-mapTo';
import { rxjsFilter } from './operators/filter';
import { rxjsTap } from './operators/tap';
import { rxjsPluck } from './operators/pluck';
import { rxjsFirst } from './operators/first';
import { rxjsStartWith } from './operators/startWith';
import { rxjsCreate } from './operators/create';
import { rxjsEvery } from './operators/every';
import { rxjsDistinctUntilChange } from './operators/distinctUntilChange';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // rangeOperator();
    // rxjsOf();
    // rxjsFrom();
    // rxjsInterval();
    // rxjsTimer();
    // rxjsMapTo();
    // rxjsFilter();
    // rxjsTap();
    // rxjsPluck();
    // rxjsFirst();
    // rxjsStartWith();
    // rxjsCreate();
    // rxjsEvery();
    rxjsDistinctUntilChange();
  }
}
