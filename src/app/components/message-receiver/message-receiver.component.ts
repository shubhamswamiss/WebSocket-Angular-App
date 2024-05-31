import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.css']
})
export class MessageReceiverComponent implements OnInit { 
  messages: string[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.getMessage().subscribe((message)  => {
      this.messages.push(message as string);
      console.log(message);
    });
  }
}
