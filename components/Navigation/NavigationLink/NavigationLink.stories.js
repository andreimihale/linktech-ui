import { useRouter } from 'next/router';
import NavigationLink from './NavigationLink';

export default {
  title: 'Components/Navigation/NavigationLink',
  component: NavigationLink,
  argTypes: {
    className: { control: 'text' },
    activeClassName: { control: 'text' },
    children: { control: 'text', defaultValue: 'My Link' },
  },
};

const Template = (args) => {
  const router = useRouter();
  const currentRouter = router.pathname;

  return <NavigationLink href={currentRouter} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
