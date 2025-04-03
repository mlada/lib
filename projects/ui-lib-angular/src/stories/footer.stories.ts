// ui-footer.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { UiFooterComponent } from '../lib/ui-footer/ui-footer.component';

const meta: Meta<UiFooterComponent> = {
  title: 'Components/Footer',
  component: UiFooterComponent,
  tags: ['autodocs'],
  render: (args: UiFooterComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    links: {
      control: 'object',
      description: 'Массив колонок с ссылками',
    },
    socialLinks: {
      control: 'object',
      description: 'Массив ссылок на соцсети',
    },
    user: {
      control: 'object',
      description: 'Данные пользователя (если авторизован)',
    },
  },
};

export default meta;
type Story = StoryObj<UiFooterComponent>;

// Базовая история
export const Default: Story = {
  args: {
    links: [
      {
        title: 'Компания',
        links: [
          { text: 'О нас', url: '/about' },
          { text: 'Карьера', url: '/careers' },
          { text: 'Контакты', url: '/contact' },
        ],
      },
      {
        title: 'Ресурсы',
        links: [
          { text: 'Документация', url: '/docs' },
          { text: 'Блог', url: '/blog' },
          { text: 'Поддержка', url: '/support' },
        ],
      },
    ],
    socialLinks: [
      {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg',
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg',
      },
    ],
    user: null,
  },
};

// История с авторизованным пользователем
export const WithUser: Story = {
  args: {
    ...Default.args,
    user: {
      name: 'Иван Петров',
      email: 'ivan@example.com',
    },
  },
};

// История с минимальным набором ссылок
export const Minimal: Story = {
  args: {
    links: [
      {
        title: 'Правовая информация',
        links: [
          { text: 'Условия использования', url: '/terms' },
          { text: 'Политика конфиденциальности', url: '/privacy' },
        ],
      },
    ],
    socialLinks: [],
    user: null,
  },
};

// Мобильная версия
export const MobileView: Story = {
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};