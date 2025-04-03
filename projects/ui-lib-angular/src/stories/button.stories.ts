import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { UiButtonComponent } from '../lib/ui-button/ui-button.component';

const meta: Meta<UiButtonComponent> = {
  title: 'Example/Button',
  component: UiButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
