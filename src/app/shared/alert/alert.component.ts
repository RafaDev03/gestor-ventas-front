import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})

export class AlertComponent implements OnInit {

  header: string | null = null;
  body: string | null = null;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getAlert().subscribe(data => {
      if (data) {
        this.header = data[0];
        this.body = data[1];
      }
    });
  }

  closeAlert(): void {
    this.body = this.header = null;
  }

}
