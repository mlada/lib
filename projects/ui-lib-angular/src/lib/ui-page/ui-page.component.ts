import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiHeaderComponent } from '../ui-header/ui-header.component';
import type { User } from '../user';
import { UiFooterComponent } from "../ui-footer/ui-footer.component";
import { UiCardComponent } from '../ui-card/ui-card.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'ui-page',
  standalone: true,
  imports: [CommonModule, UiHeaderComponent, UiFooterComponent, UiCardComponent, UiButtonComponent],
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
    <ui-card header="Пример карточки" icon="/assets/icons/sample.svg" [hoverable]="true">
      <p>Это содержимое карточки. Здесь может быть любой контент.</p>

      <div actions>
        <ui-button variant="secondary">Отмена</ui-button>
        <ui-button>Сохранить</ui-button>
      </div>
    </ui-card>

    <ui-card [imageUrl]="'/assets/sample-image.jpg'" imageAlt="Пример изображения">
      <h4>Карточка с изображением</h4>
      <p>Эта карточка содержит изображение в качестве заголовка.</p>
    </ui-card>
  </section>
  <ui-footer [user]="user"></ui-footer>
</article>`,
  styles: [
    `.ui-page {
      margin: 0 auto;
      padding: 48px 20px;
      max-width: 600px;
      color: #333;
      font-size: 14px;
      line-height: 24px;
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .ui-page h2 {
      display: inline-block;
      vertical-align: top;
      margin: 0 0 4px;
      font-weight: 700;
      font-size: 32px;
      line-height: 1;
    }

    .ui-page p {
      margin: 1em 0;
    }

    .ui-page a {
      color: inherit;
    }

    .ui-page ul {
      margin: 1em 0;
      padding-left: 30px;
    }

    .ui-page li {
      margin-bottom: 8px;
    }

    .ui-page .tip {
      display: inline-block;
      vertical-align: top;
      margin-right: 10px;
      border-radius: 1em;
      background: #e7fdd8;
      padding: 4px 12px;
      color: #357a14;
      font-weight: 700;
      font-size: 11px;
      line-height: 12px;
    }

    .ui-page .tip-wrapper {
      margin-top: 40px;
      margin-bottom: 40px;
      font-size: 13px;
      line-height: 20px;
    }

    .ui-page .tip-wrapper svg {
      display: inline-block;
      vertical-align: top;
      margin-top: 3px;
      margin-right: 4px;
      width: 12px;
      height: 12px;
    }

    .ui-page .tip-wrapper svg path {
      fill: #1ea7fd;
    }
    `
  ],
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
