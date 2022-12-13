import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Fab from './Fab';

export default {
  title: 'Components/Inputs/Fab',
  component: Fab,
  argTypes: {
    children: { control: 'text', defaultValue: 'My Fab' },
    icon: { control: 'text' },
  },
};

const Template = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const IconFab = Template.bind({});
IconFab.args = {
  icon: <ArrowUpIcon />,
  children: '',
};

export const IconTextFab = Template.bind({});
IconTextFab.args = {
  icon: <ArrowUpIcon />,
};
