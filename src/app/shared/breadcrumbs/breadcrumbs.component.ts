import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router,  Event as NavigationEvent  } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,take, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  title: string = '';
  titleSubs$: Subscription;

  constructor( private router: Router) { 
    this.titleSubs$ = this.routeParameters().
    subscribe( ({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${ title }`;
    }); }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.titleSubs$.unsubscribe();
  }

  routeParameters(){
    return this.router.events.
    pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
     
    )
  }
}
