import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextField from './TextField';
import { TextFieldProps } from './TextField.types';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  argTypes: {},
} as Meta<typeof TextField>;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: 'Error',
  label: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};
