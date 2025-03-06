import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  imports:[ CommonModule,
    FormsModule,
    IonicModule ],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private socket!: WebSocket;

  constructor() {
    this.connectWebSocket();
  }

  connectWebSocket() {
    this.socket = new WebSocket('ws://localhost:3000'); 

    this.socket.onopen = () => {
      console.log('Connected to WebSocket server');
      this.socket.send('Hello from Ionic Angular Electron');
    };

    this.socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    this.socket.onclose = () => {
      console.log('WebSocket disconnected. Reconnecting in 5s...');
      setTimeout(() => this.connectWebSocket(), 5000);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
}

