import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommserviceService {
  private subject = new Subject<any>();
 
    public sendMessage(message: string) {
      console.log(message);  
      this.subject.next({ text: message });
    }
 
    public clearMessage() {
        this.subject.next();
    }
 
    public getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
  constructor() { }
}
