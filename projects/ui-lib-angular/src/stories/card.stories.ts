// ui-card.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { UiCardComponent } from '../lib/ui-card/ui-card.component';
import { UiButtonComponent } from '../lib/ui-button/ui-button.component';

const meta: Meta<UiCardComponent> = {
  title: 'Components/Card',
  component: UiCardComponent,
  tags: ['autodocs'],
  render: (args: UiCardComponent) => ({
    props: args,
    template: `
      <ui-card
        [header]="header"
        [icon]="icon"
        [imageUrl]="imageUrl"
        [imageAlt]="imageAlt || 'Card image'"
        [hoverable]="hoverable"
      >
        <p>This is a sample card content. You can put any content here.</p>

        <div actions *ngIf="withActions">
          <ui-button variant="secondary">Cancel</ui-button>
          <ui-button>Confirm</ui-button>
        </div>
      </ui-card>
    `,
    moduleMetadata: {
      imports: [UiButtonComponent],
    },
  }),
  argTypes: {
    header: {
      control: 'text',
      description: 'Заголовок карточки',
    },
    icon: {
      control: 'text',
      description: 'URL иконки для заголовка',
    },
    imageUrl: {
      control: 'text',
      description: 'URL основного изображения карточки',
    },
    imageAlt: {
      control: 'text',
      description: 'ALT текст для основного изображения',
    },
    hoverable: {
      control: 'boolean',
      description: 'Должна ли карточка реагировать на наведение',
    },
  },
  args: {
    header: 'Card Title',
    hoverable: true,
  },
};

export default meta;
type Story = StoryObj<UiCardComponent>;

export const Basic: Story = {};

export const WithIcon: Story = {
  args: {
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg',
  },
};

export const WithImage: Story = {
  args: {
    header: undefined,
    imageUrl: 'https://picsum.photos/400/200',
    imageAlt: 'Random image',
  },
};

export const WithoutHeader: Story = {
  args: {
    header: undefined,
    icon: undefined,
  },
};


export const NonHoverable: Story = {
  args: {
    hoverable: false,
  },
};