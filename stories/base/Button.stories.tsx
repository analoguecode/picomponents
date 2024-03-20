import { Button } from '@/base/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: ['style', 'children', 'onPress', 'isDisabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onPress: () => alert('Hello World!'),
    children: 'Default',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: 'Disabled',
  },
};
