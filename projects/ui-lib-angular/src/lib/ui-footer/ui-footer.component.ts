// ui-footer.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'ui-footer',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  template: `
    <footer class="ui-footer">
      <div class="footer-content">
        <div class="logo-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64">
            <path fill="#42ade2" d="M32.9 11s-2.5-1.2-4.6-2.1c-2-.9-2.6-2.1-1.1-2.6c1.4-.5 4.7-.7 7.3-.6c1.1.1 4.6.3 4.6.3c2.6.1 2.8 1 .4 1.8L32.9 11"/>
            <path fill="#dae3ea" d="M8.3 20.4s-2.6 1-2.8 2.2c-.3 1-1.2 14.7 56.7-17.6c3.4-1.9 1.7-4-3-4.5C45-1.1 48.5 0 8.3 20.4z"/>
          </svg>
          <h2>Полет нормальный</h2>
        </div>

        <div class="links-section">
          <div class="links-column" *ngFor="let column of links">
            <h3>{{ column.title }}</h3>
            <ul>
              <li *ngFor="let link of column.links">
                <a [href]="link.url">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="actions-section">
          <ui-button
            *ngIf="!user"
            size="small"
            (onClick)="scrollToTop()"
          >
            Наверх
          </ui-button>
          <div class="social-links" *ngIf="socialLinks.length">
            <a *ngFor="let social of socialLinks" [href]="social.url">
              <img [src]="social.icon" [alt]="social.name" width="24" height="24">
            </a>
          </div>
        </div>
      </div>

      <div class="copyright">
        <p>&copy; {{ currentYear }} Полет нормальный. Все права защищены.</p>
      </div>
    </footer>
  `,
  styles: [`
    .ui-footer {
      background-color: #f8f9fa;
      padding: 2rem 1rem;
      border-top: 1px solid #e9ecef;
      font-family: Arial, sans-serif;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex: 1;
      min-width: 250px;
    }

    .logo-section h2 {
      color: #42ade2;
      margin: 0;
      font-size: 1.5rem;
    }

    .links-section {
      display: flex;
      gap: 2rem;
      flex: 2;
      flex-wrap: wrap;
    }

    .links-column {
      min-width: 150px;
    }

    .links-column h3 {
      color: #3e4347;
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .links-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .links-column li {
      margin-bottom: 0.5rem;
    }

    .links-column a {
      color: #6c757d;
      text-decoration: none;
      transition: color 0.2s;
    }

    .links-column a:hover {
      color: #42ade2;
    }

    .actions-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 1;
      min-width: 200px;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .copyright {
      text-align: center;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid #e9ecef;
      color: #6c757d;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
      }
    }
  `]
})
export class UiFooterComponent {
  @Input() user: any = null;
  @Input() links: FooterLinkColumn[] = [
    {
      title: 'Компания',
      links: [
        { text: 'О нас', url: '/about' },
        { text: 'Карьера', url: '/careers' },
        { text: 'Контакты', url: '/contact' }
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        { text: 'Документация', url: '/docs' },
        { text: 'Блог', url: '/blog' },
        { text: 'Поддержка', url: '/support' }
      ]
    },
    {
      title: 'Правовая информация',
      links: [
        { text: 'Условия использования', url: '/terms' },
        { text: 'Политика конфиденциальности', url: '/privacy' },
        { text: 'Cookie', url: '/cookie' }
      ]
    }
  ];

  @Input() socialLinks: SocialLink[] = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '/assets/icons/twitter.svg' },
    { name: 'Facebook', url: 'https://facebook.com', icon: '/assets/icons/facebook.svg' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '/assets/icons/instagram.svg' }
  ];

  get currentYear(): number {
    return new Date().getFullYear();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}