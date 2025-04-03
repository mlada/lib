import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  template: `<header>
  <div class="ui-header">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64"><path fill="#42ade2" d="M32.9 11s-2.5-1.2-4.6-2.1c-2-.9-2.6-2.1-1.1-2.6c1.4-.5 4.7-.7 7.3-.6c1.1.1 4.6.3 4.6.3c2.6.1 2.8 1 .4 1.8L32.9 11"/><path fill="#dae3ea" d="M8.3 20.4s-2.6 1-2.8 2.2c-.3 1-1.2 14.7 56.7-17.6c3.4-1.9 1.7-4-3-4.5C45-1.1 48.5 0 8.3 20.4z"/><path fill="#42ade2" d="M21.1 13.8S8.3 10 4.1 8.6c-2.7-.9-4 2.1-4 2.1s5 12.2 5.5 11.9L21 14.7c.5-.3.5-.7.1-.9"/><path fill="#c5d0d8" d="M34.8 25.5s-10.4.9-17.5 8.1c-.4.4-1.2 1.5.1 2.1c2.5.7 8.4 1.3 18.4-3.5l-1-6.7"/><path fill="#94989b" d="M35.9 32.1c-.9.3-1.9-.9-2.4-2.7c-.4-1.8-.1-3.5.8-3.8c.9-.3 1.9.9 2.4 2.7c.4 1.8.1 3.5-.8 3.8"/><path fill="#42ade2" d="M33.3 15.2c-2.5 1.1-3.7 1.7-5.1 4L17.8 34.8c-1.4 2.3-.4 3.4 2.2 2.6c2.6-.9 6.2-3.2 7.9-5.3l16.5-19.6c1.7-2.1 1.1-2.8-1.4-1.7l-9.7 4.4"/><g fill="#3e4347"><path d="M35.1 29.6c-.3-1.3-.9-2.3-1.6-2.6c-.1.7-.1 1.5.1 2.4c.3 1.3.9 2.3 1.6 2.6c.1-.7.1-1.5-.1-2.4M54.4.7c-.5.8-3.2 3.1-3.2 3.1s.5.9 2.1.4c1.3-.4 2.6-1.6 3.3-3L54.4.7"/><circle cx="21.3" cy="17.4" r="1"/><circle cx="24.9" cy="15.6" r="1"/><circle cx="28.5" cy="13.7" r="1"/><circle cx="32.2" cy="11.8" r="1"/><circle cx="35.8" cy="9.9" r="1"/><circle cx="39.4" cy="8.1" r="1"/><circle cx="43" cy="6.2" r="1"/></g><ellipse cx="32" cy="61.5" fill="#94989b" rx="24.6" ry="2.5"/></svg>
      <h1>Полет нормальный</h1>
    </div>
    <div>
      <div *ngIf="user">
        <span class="welcome">
          Добро пожаловать, <b>{{ user.name }}</b
          >!
        </span>
        <ui-button
          *ngIf="user"
          size="small"
          (onClick)="onLogout.emit($event)"
          label="Log out"
        ></ui-button>
      </div>
      <div *ngIf="!user">
        <ui-button
          *ngIf="!user"
          size="small"
          class="margin-left"
          (onClick)="onLogin.emit($event)"
          label="Log in"
        ></ui-button>
        <ui-button
          *ngIf="!user"
          size="small"
          [primary]="true"
          class="margin-left"
          (onClick)="onCreateAccount.emit($event)"
          label="Sign up"
        ></ui-button>
      </div>
    </div>
  </div>
</header>`,
  styleUrls: ['./ui-header.css'],
})
export class UiHeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
