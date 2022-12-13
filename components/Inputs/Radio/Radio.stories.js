import Radio from './Radio';

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: { children: { control: 'text', defaultValue: 'My Button' } },
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'radio',
  value: 'radio',
};
