import { map, distinctUntilChanged } from 'rxjs/operators';
import { range } from 'rxjs';

export function rxjsDistinctUntilChange() {
  const rxjsRangeObs = range(100);
  rxjsRangeObs
    .pipe(
      map((n) => ~~(n / 10)),
      distinctUntilChanged()
    )
    .subscribe((v) => console.log('rxjs distinctUntilChange', v));
}
