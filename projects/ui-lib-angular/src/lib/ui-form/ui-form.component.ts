import { Component, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { UiButtonComponent } from '../ui-button/ui-button.component';


@Component({
  selector: 'ui-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UiButtonComponent],
  template: `
    <form [formGroup]="formGroup()" (ngSubmit)="handleSubmit()" class="ui-form">
      <h2 *ngIf="formTitle()">{{ formTitle() }}</h2>

      <div class="form-content">
        <ng-content></ng-content>
      </div>

      <div class="form-actions">
        <ui-button
          type="submit"
        >
          {{ submitButtonText() }}
        </ui-button>

        <ui-button
          *ngIf="cancelButtonText()"
          variant="secondary"
          type="button"
          (click)="cancel.emit()"
        >
          {{ cancelButtonText() }}
        </ui-button>
      </div>
    </form>
  `,
  styles: [`
    .ui-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      max-width: 500px;
      margin: 0 auto;
      padding: 1.5rem;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      h2 {
        margin: 0 0 0.5rem 0;
        color: #3e4347;
        text-align: center;
      }
    }

    .form-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    @media (max-width: 600px) {
      .ui-form {
        padding: 1rem;
      }

      .form-actions {
        flex-direction: column;
      }
    }
  `]
})
export class UiFormComponent {
  // Inputs (используем signal-based inputs)
  formTitle = input<string>('');
  submitButtonText = input<string>('Submit');
  cancelButtonText = input<string>('');
  isLoading = input<boolean>(false);
  isDisabled = input<boolean>(false);
  formGroup = model<FormGroup>(new FormGroup({}));

  // Outputs
  submit = output<any>();
  cancel = output<void>();

  handleSubmit() {
    if (this.formGroup().valid) {
      this.submit.emit(this.formGroup().value);
    } else {
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched() {
    Object.values(this.formGroup().controls).forEach(control => {
      control.markAsTouched();
    });
  }
}