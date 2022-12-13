import { render, screen, fireEvent } from '@testing-library/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Fab from './Fab';

describe('components/Inputs/Fab', () => {
  it('render default Fab', () => {
    render(<Fab />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('check the default Fab with default onClick event', () => {
    render(<Fab>My Fab</Fab>);
    screen.getByText('My Fab').click();
  });

  it('check the default fab with onClick event', () => {
    const onClick = jest.fn();
    render(<Fab onClick={onClick}>My Fab</Fab>);
    screen.getByText('My Fab').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('render default Fab with icon', () => {
    render(<Fab icon={<ArrowLeftIcon />}>My Fab</Fab>);
    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');
    const startIcon = spans[0];
    expect(startIcon).toBeInTheDocument();
    expect(startIcon).toHaveClass('fab-icon');
  });

  it('render default fab with ripple', () => {
    render(<Fab disableRipple={false} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll('span');
    const ripple = spans[0];
    expect(ripple).toHaveClass('fab-ripple');

    fireEvent.mouseDown(ripple);

    expect(ripple).toHaveStyle('height: 0px');
  });

  it('render default fab without ripple', () => {
    render(<Fab disableRipple={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll('span');
    const ripple = spans[0];

    expect(ripple).toBe(undefined);
  });
});
