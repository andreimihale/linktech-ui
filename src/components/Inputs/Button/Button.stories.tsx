import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    handleClick: {
      action: 'clicked',
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default',
};

export const PrimaryContained = Template.bind({});
PrimaryContained.args = {
  text: 'Primary Contained',
  color: 'primary',
  variant: 'contained',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  text: 'Primary Text',
  color: 'primary',
  variant: 'text',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  text: 'Primary Outlined',
  color: 'primary',
  variant: 'outlined',
};
