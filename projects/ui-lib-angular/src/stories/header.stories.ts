import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { UiHeaderComponent } from '../lib/ui-header/ui-header.component';

const meta: Meta<UiHeaderComponent> = {
  title: 'Example/Header',
  component: UiHeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<UiHeaderComponent>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
