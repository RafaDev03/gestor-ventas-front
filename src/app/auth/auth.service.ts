import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private  router: Router) { }
  isLoggedIn: boolean = false;

  setLoginState(estado: boolean): void {
    this.isLoggedIn = estado;
  }
  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}