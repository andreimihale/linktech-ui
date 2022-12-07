import Button from './Button';
import DarkModeSwitcher from '../../Theme/DarkModeSwitcher';
export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'My Button' },
    startIcon: { control: 'text' },
    endIcon: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
