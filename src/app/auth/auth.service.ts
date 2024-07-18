import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:3000/auth';

  constructor(private router: Router, private http: HttpClient) { }
  isLoggedIn: boolean = false;

  setLoginState(estado: boolean): void {
    this.isLoggedIn = estado;
  }
  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  validarUsuario(usuario: string, password: string): Observable<boolean> {
    const body = `logiUsua=${usuario}&passUsua=${password}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    
    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers }).pipe(
      map(response => {
        return response && response.valid === true ;
      }),
      catchError(error => {
        // Manejar errores de la solicitud HTTP
        console.error('Error en la solicitud HTTP:', error);
        return of(false); // Devolver false en caso de error
      })
    );
  }

}