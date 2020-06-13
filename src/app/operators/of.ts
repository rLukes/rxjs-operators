import { of } from 'rxjs';

export function rxjsOf() {
  const ofObservalbe = of(1, 2, 3, 4, 5).subscribe((v) =>
    console.log(`Of emitted ${v}`)
  );
}
