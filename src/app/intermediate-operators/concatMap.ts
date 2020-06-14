import { interval, range } from 'rxjs';
import { map, concatMap, concatMapTo, tap } from 'rxjs/operators';

export function rxjsConcatMap() {
  interval(1000)
    .pipe(concatMap((n) => range(0, n + 1)))
    .subscribe((c) => console.log(c));
}

export function rxjsConcatMapTo() {
  interval(1000)
    .pipe(
      tap((c) => console.log('--------------', c, '-----------------')),
      concatMapTo(range(0, 10))
    )
    .subscribe((c) => console.log(c));
}
