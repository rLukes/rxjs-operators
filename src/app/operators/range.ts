import { range } from 'rxjs';
import { map } from 'rxjs/operators';
export function rangeOperator() {
  const rangeObservable = range(1, 10);
  rangeObservable
    .pipe(map((c) => c))
    .subscribe((v) => console.log(`Range emitted ${v}`));
}
