import { interval } from 'rxjs';
import { reduce, take, scan } from 'rxjs/operators';

export function rxjsReduce() {
  interval(200)
    .pipe(
      take(10),
      reduce((acc, value) => acc + value, 0)
    )
    .subscribe((c) => console.log(c));
}

export function rxjsScan() {
  interval(200)
    .pipe(
      take(10),
      scan((acc, value) => acc + value, 0)
    )
    .subscribe((c) => console.log(c));
}
