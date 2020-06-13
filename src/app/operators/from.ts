import { from } from 'rxjs';

export function rxjsFrom() {
  const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21];
  from(fibonacciArray).subscribe((v) => console.log('Emitted from: ', v));
}
