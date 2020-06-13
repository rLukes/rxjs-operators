import { Observable } from 'rxjs';

export function rxjsCreate() {
  const customObservable = new Observable((observer) => {
    observer.next(42), observer.complete();
  });

  customObservable.subscribe((a) => console.log(a));
}
