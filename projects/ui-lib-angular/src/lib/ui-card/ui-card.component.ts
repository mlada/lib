// ui-card.component.ts
import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-card" [class.hoverable]="hoverable">
      <div class="card-header" *ngIf="header || icon">
        <span class="header-icon" *ngIf="icon">
          <img [src]="icon" [alt]="header || 'Card icon'" />
        </span>
        <h3 *ngIf="header">{{ header }}</h3>
      </div>

      <div class="card-image" *ngIf="imageUrl">
        <img [src]="imageUrl" [alt]="imageAlt || 'Card image'" />
      </div>

      <div class="card-content">
        <ng-content></ng-content>
      </div>

      <div class="card-actions" *ngIf="hasActions">
        <ng-content select="[actions]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .ui-card {
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border: 1px solid #e0e0e0;
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;

      &.hoverable:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      .card-header {
        padding: 16px;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
        gap: 12px;

        h3 {
          margin: 0;
          color: #3e4347;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .header-icon {
          display: flex;
          align-items: center;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }

      .card-image {
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }

      .card-content {
        padding: 16px;
        flex-grow: 1;
      }

      .card-actions {
        padding: 12px 16px;
        border-top: 1px solid #f0f0f0;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
    }
  `]
})
export class UiCardComponent {
  @Input() header?: string;
  @Input() icon?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input({ transform: booleanAttribute }) hoverable = false;

  get hasActions(): boolean {
    return !!this.header || !!this.icon;
  }
}