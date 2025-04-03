import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiHeaderComponent } from '../ui-header/ui-header.component';
import type { User } from '../user';

@Component({
  selector: 'ui-page',
  standalone: true,
  imports: [CommonModule, UiHeaderComponent],
  template: `<article>
  <ui-header
    [user]="user"
    (onLogout)="doLogout()"
    (onLogin)="doLogin()"
    (onCreateAccount)="doCreateAccount()"
  ></ui-header>
  <section class="ui-page">
    <h2>Являясь всего лишь частью</h2>
    <p>
    Являясь всего лишь частью общей картины, базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Повседневная практика показывает, что консультация с широким активом влечет за собой процесс внедрения и модернизации системы массового участия. Таким образом, высокое качество позиционных исследований не даёт нам иного выбора, кроме определения дальнейших направлений развития! Не следует, однако, забывать, что социально-экономическое развитие однозначно фиксирует необходимость дальнейших направлений развития. А также некоторые особенности внутренней политики преданы социально-демократической анафеме.
    </p>
  </section>
</article>`,
  styleUrls: ['./ui-page.css'],
})
export class UiPageComponent {
  user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };
  }
}
