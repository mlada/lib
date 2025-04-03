// ui-input.component.ts
import { Component, Input, forwardRef, signal, booleanAttribute, output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="input-container" [class.disabled]="disabledS()" [class.invalid]="invalidS()">
      <label *ngIf="labelS()" [for]="idS()">{{ labelS() }}</label>

      <div class="input-wrapper">
        <span class="prefix" *ngIf="prefixIconS()" [innerHTML]="getIcon(prefixIconS())"></span>

        <input
          #inputRef
          [id]="idS()"
          [type]="typeS()"
          [placeholder]="placeholderS()"
          [disabled]="disabledS()"
          [value]="valueS()"
          (input)="onInput($event)"
          (blur)="blur()"
          (focus)="onFocus.emit($event)"
        />

        <span class="suffix" *ngIf="suffixIconS()" [innerHTML]="getIcon(suffixIconS())"></span>

        <button
          class="clear-btn"
          *ngIf="clearableS() && valueS() && !disabledS()"
          (click)="clearValue()"
          type="button"
          aria-label="Clear input"
        >
          ×
        </button>
      </div>

      <div class="hint" *ngIf="hintS() && !invalidS()">{{ hintS() }}</div>
      <div class="error" *ngIf="invalidS() && errorMessageS()">{{ errorMessageS() }}</div>
    </div>
  `,
  styles: [`
    .input-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      font-family: system-ui, sans-serif;

      &.invalid {
        .input-wrapper {
          border-color: #d32f2f;
        }
        .error {
          color: #d32f2f;
        }
      }

      &.disabled {
        opacity: 0.7;
        pointer-events: none;
      }
    }

    label {
      font-size: 14px;
      color: #3e4347;
      font-weight: 500;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 8px 12px;
      transition: border-color 0.2s;
      background: white;

      &:focus-within {
        border-color: #1976d2;
      }
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 14px;
      padding: 0;
      background: transparent;
      font-family: inherit;

      &::placeholder {
        color: #9e9e9e;
      }
    }

    .prefix, .suffix {
      display: flex;
      color: #757575;
      margin: 0 4px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .clear-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: #757575;
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 18px;
      line-height: 1;

      &:hover {
        color: #424242;
      }
    }

    .hint, .error {
      font-size: 12px;
      margin-top: 2px;
    }

    .hint {
      color: #757575;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true
    }
  ]
})
export class UiInputComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  // Input signals
  valueS = signal<string>('');
  labelS = signal<string>('');
  placeholderS = signal<string>('');
  typeS = signal<'text' | 'password' | 'email' | 'number' | 'tel' | 'url'>('text');
  disabledS = signal<boolean>(false);
  invalidS = signal<boolean>(false);
  errorMessageS = signal<string>('');
  hintS = signal<string>('');
  prefixIconS = signal<string>('');
  suffixIconS = signal<string>('');
  clearableS = signal<boolean>(false);
  idS = signal<string>(`input-${Math.random().toString(36).substring(2, 9)}`);

  // Outputs
  onFocus = output<Event>();
  onBlur = output<void>();
  valueChange = output<string>();

  // Input setters
  @Input() set value(val: string) { this.valueS.set(val); }
  @Input() set label(val: string) { this.labelS.set(val); }
  @Input() set placeholder(val: string) { this.placeholderS.set(val); }
  @Input() set type(val: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url') { this.typeS.set(val); }
  @Input({ transform: booleanAttribute }) set disabled(val: boolean) { this.disabledS.set(val); }
  @Input({ transform: booleanAttribute }) set invalid(val: boolean) { this.invalidS.set(val); }
  @Input() set errorMessage(val: string) { this.errorMessageS.set(val); }
  @Input() set hint(val: string) { this.hintS.set(val); }
  @Input() set prefixIcon(val: string) { this.prefixIconS.set(val); }
  @Input() set suffixIcon(val: string) { this.suffixIconS.set(val); }
  @Input({ transform: booleanAttribute }) set clearable(val: boolean) { this.clearableS.set(val); }
  @Input() set id(val: string) { this.idS.set(val); }

  // ControlValueAccessor methods
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngAfterViewInit() {
    if (this.typeS() === 'number') {
      this.inputRef.nativeElement.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
    }
  }

  getIcon(iconName: string): string {
    // Простые символы для замены иконок
    const icons: Record<string, string> = {
      'person': '👤',
      'email': '✉️',
      'lock': '🔒',
      'search': '🔍',
      'info': 'ℹ️',
      'visibility': '👁️',
      'visibility-off': '🚫',
      'close': '×'
    };

    return icons[iconName] || iconName;
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueS.set(value);
    this.onChange(value);
    this.valueChange.emit(value);
  }

  blur() {
    this.onTouched();
    this.onBlur.emit();
  }

  clearValue() {
    this.valueS.set('');
    this.onChange('');
    this.valueChange.emit('');
    this.inputRef.nativeElement.focus();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.valueS.set(value || '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledS.set(isDisabled);
  }
}