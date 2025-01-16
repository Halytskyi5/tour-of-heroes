import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-messages',
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}
}
