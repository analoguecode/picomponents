import { withoutVitePlugins } from '@storybook/builder-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [
        tsconfigPaths(),
        ...(await withoutVitePlugins(config.plugins, ['vite:lib-inject-css'])),
      ],
    };
  },
};
export default config;
