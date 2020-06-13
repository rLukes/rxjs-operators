import { range, of, timer } from 'rxjs';
import { every, tap, delay, delayWhen } from 'rxjs/operators';

export function rxjsDelay() {
  const res = of(42)
    .pipe(
      tap((_) => console.log('tap')),
      delay(1200)
    )
    .subscribe((v) => console.log(v));
}

export function rxjsDelayWhen() {
  const res = range(1, 9)
    .pipe(delayWhen((n) => timer(n * 1000)))
    .subscribe((v) => console.log(v));
}
