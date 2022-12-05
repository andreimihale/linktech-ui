import React from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    handleClick: {
      action: 'clicked',
    },
  },
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};
