import { interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';

export function rxjsMerge() {
  const bluePostFeed = interval(1000).pipe(map((n) => `artickle #${n}`));

  const redFeed = interval(650).pipe(map((n) => `red feed ${n}`));

  merge(bluePostFeed, redFeed)
    .pipe()
    .subscribe((d) => console.log(d));
}
