import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '~/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router, private authService: AuthService){}

  navigateVentas(){
    this.router.navigate(["/home/ventas"]);
  }
  
  logOut(){
    this.authService.logOut();
  }

}