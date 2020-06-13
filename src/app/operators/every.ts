import { range } from 'rxjs';
import { every } from 'rxjs/operators';

export function rxjsEvery() {
  const rxjsRange = range(1, 9);
  rxjsRange
    .pipe(every((v) => v % 2 === 0))
    .subscribe((c) => console.log('rxjs every: ', c));
}
