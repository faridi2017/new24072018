import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommserviceService } from '../commservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  message: any;
  subscription: Subscription;
  constructor(private messageService: CommserviceService) { 
    console.log('page2 constructor');
    // receiving message from page1 via service
    this.subscription = this.messageService.getMessage().subscribe((message: any) => { 
      this.message = message;
      console.log('aarif',this.message); });
  
  
  } // end of constructor
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}// end of ngOnDestroy
clearMessage(): void {
  // clear message
  this.messageService.clearMessage();
}
  ngOnInit() {
  }

}
