import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.loginStatus.next(this.isLoggedIn());
   }

   // tslint:disable-next-line: typedef
   save(data) {
    this.loginStatus.next(true);
    localStorage.setItem('token', data.token);
  }

  // tslint:disable-next-line: typedef
  get() {
    return localStorage.get('token');
  }

  // tslint:disable-next-line: typedef
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  clear() {
    this.loginStatus.next(false);
    localStorage.removeItem('token');
  }
}
