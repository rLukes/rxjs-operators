import { interval } from 'rxjs';
import { last, take } from 'rxjs/operators';

export function rxjsLast() {
  interval(100)
    .pipe(take(5), last())
    .subscribe((c) => console.log('last value', c));

  // this will not emit, it will nver complete
  interval(100)
    .pipe(last())
    .subscribe((c) => console.log('last value', c));
}
