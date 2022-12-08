import React from 'react';
import Button from '../../Inputs/Button';
import ClickAwayListener from './ClickAwayListener';

export default {
  title: 'Components/Utils/ClickAwayListener',
  component: ClickAwayListener,
  argTypes: {},
};

const Template = (args) => {
  const [open, setOpen] = React.useState(true);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)} {...args}>
      <Button onClick={() => setOpen((prevState) => !prevState)}>
        Toggle click away
      </Button>
      {open && <div>This is inside the clickAway</div>}
    </ClickAwayListener>
  );
};
export const Default = Template.bind({});
Default.args = {};
