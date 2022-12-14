import Popover from './Popover';

export default {
  title: 'Components/Utils/Popover',
  component: Popover,
  argTypes: { children: { control: 'text', defaultValue: 'My Button' } },
};

const Template = (args) => <Popover {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Popover',
  switcherText: 'Popover Switcher',
  title: 'Popover Title',
};
