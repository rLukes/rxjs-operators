import { of, range, interval, from } from 'rxjs';
import { take, map, concatAll } from 'rxjs/operators';

export function rxjsConcatAll() {
  of(range(1, 3), of('a', 'b'), interval(100).pipe(take(10)))
    .pipe(concatAll())
    .subscribe((d) => console.log(d));
}
