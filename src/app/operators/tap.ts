import { range, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export function rxjsTap() {
  const intervalObservalbe = interval(400);

  intervalObservalbe
    .pipe(
      map((c) => c * 2),
      tap((c) => console.log('tap value', c)),
      map((c) => c + 2)
    )
    .subscribe((c) => console.log('rxjs tap operator: ', c));
}
