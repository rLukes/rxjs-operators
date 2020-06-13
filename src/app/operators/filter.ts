import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

export function rxjsFilter() {
  const rangeObservable = range(1, 9)
    .pipe(filter((v) => v % 2 === 0))
    .subscribe((c) => console.log('rxjs filter operator ', c));
}
