// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';

// @Component({
//   selector: 'app-home',
//   imports:[ CommonModule,
//     FormsModule,
//     IonicModule ],
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
//   private socket!: WebSocket;

//   constructor() {
//     this.connectWebSocket();
//   }

//   connectWebSocket() {
//     this.socket = new WebSocket('ws://localhost:3000'); 

//     this.socket.onopen = () => {
//       console.log('Connected to WebSocket server');
//       this.socket.send('Hello from Ionic Angular Electron');
//     };

//     this.socket.onmessage = (event) => {
//       console.log('Message from server:', event.data);
//     };

//     this.socket.onclose = () => {
//       console.log('WebSocket disconnected. Reconnecting in 5s...');
//       setTimeout(() => this.connectWebSocket(), 5000);
//     };

//     this.socket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };
//   }
// }

import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  messageLog: string[] = [];

  constructor() {
    this.setupIpcCommunication();
  }

  setupIpcCommunication() {
    // Listen for messages from the main process
    ipcRenderer.on("message-from-main", (_event, message) => {
      console.log("Message from Main:", message);
      this.messageLog.push(message);
    });
  }

  sendMessage() {
    const userMessage = "Hello from Ionic Angular Electron";
    ipcRenderer.send("send-message", userMessage);
  }
}

