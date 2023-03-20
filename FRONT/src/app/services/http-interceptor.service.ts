/* eslint-disable @ngrx/no-typed-global-store */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, mergeMap, Observable } from 'rxjs';
import { BoardState } from '../models/board.model';
import { selectToken } from '../store/board.selector';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private store: Store<BoardState>) {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!req.url.includes('/login')) {
      return this.store.select(selectToken).pipe(
        first(),
        mergeMap((token) => {
          //TODO in case of auth error
          const authReq = req.clone({
            headers: req.headers
              .set('Content-Type', 'application/json')
              .set('Accept', 'application/json')
              .set('Authorization', `Bearer ${token}`),
          });

          return next.handle(authReq);
        })
      );
    }
    return next.handle(req);
  }
}
