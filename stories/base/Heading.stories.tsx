import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@/base/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Base/Heading',
  component: Heading,
  parameters: {
    controls: {
      exclude: ['style', 'children', 'as'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Test',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Test',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Test',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Test',
  },
};

export const H5: Story = {
  args: {
    as: 'h5',
    children: 'Test',
  },
};

export const H6: Story = {
  args: {
    as: 'h6',
    children: 'Test',
  },
};
