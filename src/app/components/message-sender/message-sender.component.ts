import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {

  message:string = '';

  constructor(private websocketService:WebsocketService){}

  sendMessage(){
    this.websocketService.sendMessage(this.message);  
    this.message = '';
  }
}
