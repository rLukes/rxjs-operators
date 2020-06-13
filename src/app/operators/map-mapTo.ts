import { range } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

export function rxjsMap() {
  const rxjsRange = range(1, 9)
    .pipe(map((v) => v * v))
    .subscribe((c) => console.log('map operator', c));
}

export function rxjsMapTo() {
  const rxjsRange = range(1, 9)
    .pipe(mapTo({ type: 'Notfication arrived' }))
    .subscribe((c) => console.log('mapTo operator', c));
}
