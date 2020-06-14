import { range } from 'rxjs';
import { groupBy, mergeMap } from 'rxjs/operators';

export function rxjsGroupBy() {
  range(1, 20)
    .pipe(
      groupBy((n) => n % 2),
      mergeMap((nGroup) => nGroup)
    )
    .subscribe((a) => console.log(a));
}
