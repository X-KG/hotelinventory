import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);

    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers: new HttpHeaders({ 'token': '123456newtoken' }),
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
