import { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked((prevState) => !prevState);
  };
  return <Checkbox checked={checked} onClick={handleToggle} />;
};
export const Default = Template.bind({});
Default.args = {};
