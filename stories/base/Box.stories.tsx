import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@/base/Box';

const meta: Meta<typeof Box> = {
  title: 'Base/Box',
  component: Box,
  parameters: {
    controls: {
      exclude: ['style', 'children'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'column',
    justify: 'start',
    align: 'start',
    wrap: 'wrap',
    width: 'default',
    children: (
      <>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </>
    ),
  },
};
