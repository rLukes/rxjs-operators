import { range } from 'rxjs';
import { single } from 'rxjs/operators';

export function rxjsSingle() {
  range(0, 2)
    .pipe(single((c) => c % 2 === 0))
    .subscribe((a) => console.log(a));
}
