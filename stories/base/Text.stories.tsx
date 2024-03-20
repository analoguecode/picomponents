import { Text } from '@/base/Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Base/Text',
  component: Text,
  parameters: {
    controls: {
      exclude: ['style', 'children', 'as'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text',
  },
};
