import { throwError } from 'rxjs';

export function rxjsThrowError() {
  throwError('this is error')
    .pipe()
    .subscribe((n) => console.log('N value was emitted', n));
}
