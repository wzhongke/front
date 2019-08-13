import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];
  add(message) {
    console.log(message);
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
