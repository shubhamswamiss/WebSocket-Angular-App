import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  messages: any[] = [];
  currentUser = 'currentUserId'; // Assign a unique identifier for the current user

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.getMessage().subscribe((message: any) => {
      message.self = message.senderId === this.currentUser; // Check if the message is from the current user
      message.self= false;
      this.messages.push(message);
    });
  }

  sendMessage(msg: any) {
    const messageToSend = {
      text: msg.text,
      senderId: this.currentUser,
      self: true // Indicate that this message is from the current user
    };
    this.websocketService.sendMessage(messageToSend);
    this.messages.push(messageToSend);
    console.log(this.messages)
  }
}
