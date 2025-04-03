import type { Meta, StoryObj } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { UiFormComponent } from '../lib/ui-form/ui-form.component';
import { UiInputComponent } from '../lib/ui-input/ui-input.component';

const meta: Meta<UiFormComponent> = {
  title: 'Components/Form',
  component: UiFormComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
      formGroup: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      })
    },
    template: `
      <ui-form
        [formTitle]="formTitle"
        [submitButtonText]="submitButtonText"
        [cancelButtonText]="cancelButtonText"
        [isLoading]="isLoading"
        [isDisabled]="isDisabled"
        [formGroup]="formGroup"
        (submit)="submit($event)"
        (cancel)="cancel()"
      >
        <ui-input
          label="Username"
          [formControl]="formGroup.controls['username']"
        ></ui-input>

        <ui-input
          label="Email"
          type="email"
          [formControl]="formGroup.controls['email']"
        ></ui-input>
      </ui-form>
    `,
    moduleMetadata: {
      imports: [FormsModule, ReactiveFormsModule, UiInputComponent]
    }
  }),
  argTypes: {
    submit: { action: 'submit' },
    cancel: { action: 'cancel' }
  }
};

export default meta;
type Story = StoryObj<UiFormComponent>;

export const Default: Story = {
  args: {
    formTitle: 'Login Form',
    submitButtonText: 'Sign In'
  }
};

export const WithValidation: Story = {
  args: {
    ...Default.args,
    formTitle: 'Registration',
    submitButtonText: 'Register',
    cancelButtonText: 'Cancel'
  }
};

export const LoadingState: Story = {
  args: {
    ...Default.args,
    isLoading: true
  }
};