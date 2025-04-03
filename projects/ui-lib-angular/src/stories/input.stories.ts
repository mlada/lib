// ui-input.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect } from '@storybook/test';
import { UiInputComponent } from '../lib/ui-input/ui-input.component';

const meta: Meta<UiInputComponent> = {
  title: 'Components/Input',
  component: UiInputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    prefixIcon: {
      control: 'select',
      options: ['', 'person', 'email', 'lock', 'search', 'info'],
      mapping: {
        'person': '👤',
        'email': '✉️',
        'lock': '🔒',
        'search': '🔍',
        'info': 'ℹ️'
      }
    },
    suffixIcon: {
      control: 'select',
      options: ['', 'info', 'visibility', 'visibility-off'],
      mapping: {
        'info': 'ℹ️',
        'visibility': '👁️',
        'visibility-off': '🚫'
      }
    },
    valueChange: { action: 'valueChanged' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
    disabled: false,
    invalid: false,
    errorMessage: 'Invalid input',
    hint: 'This is a hint text',
    clearable: false,
    prefixIcon: '',
    suffixIcon: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-input
        [label]="label"
        [placeholder]="placeholder"
        [type]="type"
        [disabled]="disabled"
        [invalid]="invalid"
        [errorMessage]="errorMessage"
        [hint]="hint"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [clearable]="clearable"
        (valueChange)="valueChange($event)"
        (onFocus)="onFocus($event)"
        (onBlur)="onBlur()"
      ></ui-input>
    `
  }),
};

export default meta;
type Story = StoryObj<UiInputComponent>;

export const Default: Story = {};

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: 'Email address',
    placeholder: 'user@example.com',
  },
};

export const WithIcons: Story = {
  args: {
    prefixIcon: 'email',
    suffixIcon: 'info',
  },
  name: 'With Icons (Emoji)',
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    prefixIcon: 'lock',
  },
};

export const InvalidState: Story = {
  args: {
    invalid: true,
    errorMessage: 'This field is required',
    value: 'Invalid value',
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    value: 'Disabled value',
  },
};

export const ClearableInput: Story = {
  args: {
    clearable: true,
    value: 'Clear me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('Clear me');

    const clearButton = canvas.getByRole('button', { name: /clear/i });
    await userEvent.click(clearButton);
    await expect(input).toHaveValue('');
  },
};

export const InteractiveTest: Story = {
  args: {
    label: 'Test input',
    placeholder: 'Type something...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Тест ввода текста
    await userEvent.type(input, 'Hello Storybook!');
    await expect(input).toHaveValue('Hello Storybook!');

    // Тест фокуса/блюра
    await userEvent.click(input);
    await userEvent.tab();
  },
};