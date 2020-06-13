import { interval } from 'rxjs';

export function rxjsInterval() {
  const ticker = interval(1000);
  ticker.subscribe((v) => console.log('Emitted from interval ;', v));
}

export function rxjsTimer() {
  const ticker = interval(2000);
  ticker.subscribe((v) => console.log('Emitted from interval ;', v));
}
