import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MessageReceiverComponent } from './components/message-receiver/message-receiver.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './services/websocket.service';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';


const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MessageSenderComponent,
    MessageReceiverComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
