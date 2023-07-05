import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs : Subscription

  constructor() {

    /* let i = -1;

    const obs$ = new Observable<number>((observer) => {


      const intervalo = setInterval(() => {
        console.log("Tick.."); 
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('i llegó a 2..');
        }
      }, 1000);
    }); */

    /* this.retornaObservable().pipe(
      retry()
    ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Terminado..')); */

      this.intervalSubs = this.retornaInterval().subscribe( valor => console.log(valor));
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInterval() : Observable<number>{

    const interval$ = interval(500).pipe(
      map(valor => { return valor + 1 }),
      filter( valor => valor % 2 == 0 /* ? true : false */),
      take(100)
    );

    return interval$;
  }

  retornaObservable() : Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>((observer) => {


      const intervalo = setInterval(() => {
        /* console.log("Tick.."); */
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('i llegó a 2..');
        }
      }, 1000);
    });

    return obs$;
  }

  
}
