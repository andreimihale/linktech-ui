import { useState } from 'react';
import Button from '../../Inputs/Button';
import Backdrop from './Backdrop';

export default {
  title: 'Components/Utils/Backdrop',
  component: Backdrop,
  argTypes: {},
};

const Template = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop open={open} onClick={handleClose}>
        This is the children of the backdrop
      </Backdrop>
    </>
  );
};

export const Default = Template.bind({});
