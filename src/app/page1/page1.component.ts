import { Component, OnInit } from '@angular/core';
import { CommserviceService } from '../commservice.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private page1service: CommserviceService) {
    console.log('page1 constructor');
   }
sendMessage(): void {
  console.log('sending message from page1');
  this.page1service.sendMessage('Message from page1 to Page 2');// creating message
}
  ngOnInit() {
  }

}
