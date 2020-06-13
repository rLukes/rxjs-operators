import { timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export function rxjsStartWith() {
  console.log('made api request');
  const timerObserable = timer(2000, 500)
    .pipe(
      map((n) => n + 1),
      startWith('emit this text and continue with source object')
    )
    .subscribe((v) => console.log('request complete:', v));
}
