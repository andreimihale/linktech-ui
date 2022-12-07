import Link from './Link';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text', defaultValue: 'My Link' },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};
