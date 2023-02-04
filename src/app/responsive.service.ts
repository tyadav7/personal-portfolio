import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isScreenBig$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isScreenBig$ = this.breakpointObserver
      .observe(['(max-width: 1100px)'])
      .pipe(
        map((result) => result.matches),
        map((isScreenSmall) => !isScreenSmall)
      );
  }
}
