import React from 'react';
import { Story, Meta } from '@storybook/react';

import UseTheme from './UseTheme';
import { UseThemeProps } from './UseTheme.types';
import Button from '../../Inputs/Button/Button';

export default {
  title: 'Utils/UseTheme',
  component: UseTheme,
  argTypes: {},
} as Meta<typeof UseTheme>;

const Template: Story<UseThemeProps> = (args) => (
  <UseTheme {...args}>
    <Button size="large" children="Priamry" />
  </UseTheme>
);

export const Default = Template.bind({});
Default.args = {
  useDark: false,
};

export const Dark = Template.bind({});
Dark.args = {
  useDark: true,
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  theme: {
    colors: { primary: 'red' },
  },
};
