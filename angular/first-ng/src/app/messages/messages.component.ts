import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  /** Angular 只会绑定到组件的公共属性。 */
  constructor(public messageService :MessageService) { }

  ngOnInit() {
  }

}
