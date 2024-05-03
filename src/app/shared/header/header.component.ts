import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '~/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  state: boolean = false;

  constructor(private authService: AuthService){}

  toggleState() {
    this.state = !this.state;
  }

  logOut() {
    this.authService.logOut();
  }  
}
