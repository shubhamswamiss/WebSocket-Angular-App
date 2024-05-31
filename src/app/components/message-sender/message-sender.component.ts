import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  @Output() sendMessage = new EventEmitter<any>();
  message: string = '';

  send() {
    if (this.message.trim()) {
      this.sendMessage.emit({ text: this.message });
      this.message = '';
    }
  }
}
