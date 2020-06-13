import { map, tap, pluck } from 'rxjs/operators';
import { interval } from 'rxjs';

export function rxjsPluck() {
  const movieAPI = interval(1000)
    .pipe(
      map((i) => ({
        name: `Movie #${i}`,
        num: i,
      })),
      pluck('name')
    )
    .subscribe((c) => console.log('rxjs pluck opertor: ', c));
}
