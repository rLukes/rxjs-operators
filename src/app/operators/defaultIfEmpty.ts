import { range, empty } from 'rxjs';
import { every, defaultIfEmpty } from 'rxjs/operators';

export function rxjsDefaultIfEmpty() {
  empty()
    .pipe(defaultIfEmpty(42))
    .subscribe((a) => console.log('where is the value', a));
}
