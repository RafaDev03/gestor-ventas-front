import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() { }

   //Alert
   private alertSubject: BehaviorSubject<[string, string] | null> =
   new BehaviorSubject<[string, string] | null>(null);

   getAlert(): Observable<[string, string] | null> {
    return this.alertSubject.asObservable();
  }

  showAlert(body: string, header: string): void {
    this.alertSubject.next([body, header]);
  }
  
  clearAlert(): void {
    this.alertSubject.next(null);
  }
}
