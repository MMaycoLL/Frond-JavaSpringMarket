import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../servicios/token.service';
import { AuthService } from '../servicios/auth.service';

@Injectable()
export class UsuarioInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiUrl = req.url.includes("api/auth");
    if (!this.tokenService.isLogged() || isApiUrl) {
      return next.handle(req);
    }
    let initReq = req;
    let token = this.tokenService.getToken();
    initReq = this.addToken(req, token!);
    return next.handle(initReq);
  }
  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ headers: req.headers.set("Authorization", 'Bearer ' + token) });
  }
}
