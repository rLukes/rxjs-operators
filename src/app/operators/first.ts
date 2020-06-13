import { map, tap, pluck, first } from 'rxjs/operators';
import { interval } from 'rxjs';

export function rxjsFirst() {
  const firstObservable = interval(100)
    .pipe(first((n) => n === 3))
    .subscribe((v) => console.log('rxjs first ', v));
}
