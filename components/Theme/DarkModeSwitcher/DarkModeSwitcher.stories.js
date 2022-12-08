import DarkModeSwitcher from './DarkModeSwitcher';

export default {
  title: 'Components/Theme/DarkModeSwitcher',
  component: DarkModeSwitcher,
};

const Template = (args) => <DarkModeSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
