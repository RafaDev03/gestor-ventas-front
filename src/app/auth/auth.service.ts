import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = '';

  constructor(private router: Router, private http: HttpClient) { }
  isLoggedIn: boolean = false;

  setLoginState(estado: boolean): void {
    this.isLoggedIn = estado;
  }
  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  validarUsuario(
    usuario: string,
    password: string,
  ): Observable<any> {
    const body = `logiUsua=${usuario}&passUsua=${password}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post<any>(`${this.apiUrl}/login`, body, {
      headers,
    });
  }

}