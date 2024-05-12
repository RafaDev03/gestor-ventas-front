import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '~/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  state: boolean = false;
  user: string = '';

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.user = this.cookieService.get('user');
  }

  toggleState() {
    this.state = !this.state;
  }

  logOut() {
    this.authService.logOut();
  }
}
