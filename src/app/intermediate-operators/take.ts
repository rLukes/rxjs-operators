import { range, timer, interval } from 'rxjs';
import { take, takeWhile, takeUntil } from 'rxjs/operators';

export function rxjsTake() {
  range(1, 9)
    .pipe(take(2))
    .subscribe((c) => console.log('take: ', c));
}

export function rxjsTakeWhile() {
  range(1, 9)
    .pipe(takeWhile((n) => n <= 7))
    .subscribe((c) => console.log('take: ', c));
}

export function rxjsTakeUntil() {
  interval(100)
    .pipe(takeUntil(timer(2000)))
    .subscribe((c) => console.log('take: ', c));
}
