import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import jwt_decode from "jwt-decode";
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const tokenl = localStorage.getItem('accessToken');
    console.log("My Access Token : ",tokenl)
    if (tokenl) {
       


      const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenl}`);
      console.log("The Headers : ",headers);
      const newReq = req.clone(
        {headers}
      );

      return next.handle(newReq);
    }
    else{
    console.log('kkkkkkkkkkkkkk')
    return next.handle(req);}
  }
}

export const InterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true
};