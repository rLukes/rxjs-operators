import { interval, merge, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

export function rxjsMerge() {
  const bluePostFeed = interval(1000).pipe(map((n) => `artickle #${n}`));

  const redFeed = interval(650).pipe(map((n) => `red feed ${n}`));

  merge(bluePostFeed, redFeed)
    .pipe()
    .subscribe((d) => console.log(d));
}

export function rxjsMergeAll() {
  const bluePostFeed = interval(1000).pipe(map((n) => `artickle #${n}`));

  const redFeed = interval(650).pipe(map((n) => `red feed ${n}`));

  const greenFeed = interval(1650).pipe(map((n) => `green feed ${n}`));

  of(bluePostFeed, redFeed, greenFeed)
    .pipe(mergeAll())
    .subscribe((d) => console.log(d));
}

export function rxjsMergeMap() {
  const letters = of('a', 'b', 'c');

  letters
    .pipe(mergeMap((c) => interval(1000).pipe(map((i) => c + i))))
    .subscribe((d) => console.log(d));
}
