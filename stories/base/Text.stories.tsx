import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/base/Text';

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
    children: 'Test',
  },
};
