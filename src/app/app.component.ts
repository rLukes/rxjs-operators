import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
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
import { rxjsDefaultIfEmpty } from './operators/defaultIfEmpty';
import {
  rxjsDelay,
  rxjsDelayWhen,
} from './intermediate-operators/delay-delayWhen';
import {
  rxjsTake,
  rxjsTakeWhile,
  rxjsTakeUntil,
} from './intermediate-operators/take';
import { rxjsThrowError } from './intermediate-operators/thorwError';
import { fromEvent } from 'rxjs';
import {
  map,
  startWith,
  debounceTime,
  distinctUntilChanged,
  skip,
  skipWhile,
} from 'rxjs/operators';
import { rxjsLast } from './intermediate-operators/last';
import { rxjsConcatAll } from './intermediate-operators/concatAll';
import {
  rxjsConcatMap,
  rxjsConcatMapTo,
} from './intermediate-operators/concatMap';
import { rxjsSingle } from './intermediate-operators/single';
import { rxjsReduce, rxjsScan } from './intermediate-operators/reduce-scan';
import { rxjsGroupBy } from './intermediate-operators/groupBy';
import {
  rxjsMerge,
  rxjsMergeAll,
  rxjsMergeMap,
} from './intermediate-operators/merge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: true }) input: ElementRef;
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
    // rxjsDistinctUntilChange();
    // rxjsDefaultIfEmpty();
    /** -------------------Intermediate operators-------------- */
    // rxjsDelay();
    // rxjsDelayWhen();
    // rxjsTakeWhile();
    // rxjsTakeUntil();
    // rxjsThrowError();
    // rxjsLast();
    // rxjsConcatAll();
    // rxjsConcatMap();
    // rxjsConcatMapTo();
    // rxjsSingle();
    //  rxjsScan();
    //rxjsGroupBy();

    //rxjsMerge();
    //rxjsMergeAll();
    rxjsMergeMap();
  }

  ngAfterViewInit(): void {
    // this.rxjsSkip();
    // this.rxjsSkipWhile();
  }

  rxjsSkip() {
    const terms$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map((event) => event.target.value),
        skip(10)
      )
      .subscribe((c) => console.log(c));
  }

  rxjsSkipWhile() {
    const terms$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map((event) => event.target.value),
        skipWhile((v) => v !== 'g')
      )
      .subscribe((c) => console.log(c));
  }
}
