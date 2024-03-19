import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Base/Box',
  component: Box,
  args: {
    style: {
      backgroundColor: 'turquoise',
    },
  },
  // argTypes: {
  //   justify: {
  //     options: ["start", "center", "end"],
  //     control: { type: "radio" },
  //   },
  // },
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
    direction: 'row',
    justify: 'start',
    children: (
      <>
        <p>Default Box</p>
        <p>Default Box</p>
      </>
    ),
  },
};
