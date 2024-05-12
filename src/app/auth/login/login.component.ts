import { Component, ViewChild } from '@angular/core';
import { loginInterface } from './login.interface';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '~/shared/alert/alert.component';

import { SharedService } from '~/shared/shared.service';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  state = false;
  constructor(private sharedService: SharedService, private router: Router, private authService: AuthService, private cookieService: CookieService) { }

  @ViewChild(AlertComponent)
  objAlert!: AlertComponent;

  /*Simulación*/
  credentials: loginInterface = { username: 'Rios', password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' };

  /*Iniciar sesión */
  login(event: Event) {
    event.preventDefault();
    const encryptedPassword = CryptoJS.SHA256(this.password.trim()).toString();
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.state = true;
      this.sharedService.showAlert(
        'Alerta',
        'Por favor, ingrese su usuario y contraseña.'
      );
      setTimeout(() => {
        this.objAlert.closeAlert();
      }, 1500);
    } else if (this.credentials.username === this.username && this.credentials.password === encryptedPassword) {
      this.cookieService.set('user', this.username);
      this.cookieService.set('pass', encryptedPassword);
      //this.cookieService.set('token', response.token);
      this.authService.setLoginState(true);
      this.router.navigate(['/home']);      
    } else {
      this.state = true;
      this.sharedService.showAlert(
        'Alerta',
        'Credenciales incorrectas'
      );
      setTimeout(() => {
        this.objAlert.closeAlert();
      }, 1500);
    }
  }
  
  /* Restablecer Contraseña*/
  restablecerContrasenia() {
    this.sharedService.showAlert('Alerta', 'Contacta con Gestor Ventas para restablecer tu contraseña.');
    setTimeout(() => {
      this.objAlert.closeAlert();
    }, 2000);
  }

}
