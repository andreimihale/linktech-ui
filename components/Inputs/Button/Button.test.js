import { render, screen, fireEvent } from '@testing-library/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from './Button';

describe('components/Inputs/Button', () => {
  it('render default button', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('check the default button with default onClick event', () => {
    render(<Button></Button>);
    screen.getByText('My Button').click();
  });

  it('check the default button with onClick event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}></Button>);
    screen.getByText('My Button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('render default button with startIcon', () => {
    render(<Button startIcon={<ArrowLeftIcon />}></Button>);
    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');
    const startIcon = spans[0];
    expect(startIcon).toBeInTheDocument();
    expect(startIcon).toHaveClass('btn-icon-start');
  });

  it('render default button with link and startIcon', () => {
    render(
      <Button
        startIcon={<ArrowLeftIcon />}
        href="https://www.google.com"
      ></Button>
    );
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const spans = button.querySelectorAll('span');

    const startIcon = spans[0];

    expect(startIcon).toBeInTheDocument();
    expect(startIcon).toHaveClass('btn-icon-start');
  });

  it('render default button with endIcon', () => {
    render(<Button endIcon={<ArrowLeftIcon />}></Button>);
    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');
    const endIcon = spans[0];
    expect(endIcon).toBeInTheDocument();
    expect(endIcon).toHaveClass('btn-icon-end');
  });

  it('render default button with link and endIcon', () => {
    render(
      <Button
        endIcon={<ArrowLeftIcon />}
        href="https://www.google.com"
      ></Button>
    );
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const spans = button.querySelectorAll('span');

    const endIcon = spans[0];

    expect(endIcon).toBeInTheDocument();
    expect(endIcon).toHaveClass('btn-icon-end');
  });

  it('render default button with startIcon and endIcon', () => {
    render(
      <Button
        startIcon={<ArrowLeftIcon />}
        endIcon={<ArrowLeftIcon />}
      ></Button>
    );
    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');
    const startIcon = spans[0];
    expect(startIcon).toBeInTheDocument();
    expect(startIcon).toHaveClass('btn-icon-start');
    const endIcon = spans[1];
    expect(endIcon).toBeInTheDocument();
    expect(endIcon).toHaveClass('btn-icon-end');
  });

  it('render default button with link, startIcon and endIcon', () => {
    render(
      <Button
        startIcon={<ArrowLeftIcon />}
        endIcon={<ArrowLeftIcon />}
        href="https://www.google.com"
      ></Button>
    );
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const spans = button.querySelectorAll('span');

    const startIcon = spans[0];
    expect(startIcon).toBeInTheDocument();
    expect(startIcon).toHaveClass('btn-icon-start');
    const endIcon = spans[1];
    expect(endIcon).toBeInTheDocument();
    expect(endIcon).toHaveClass('btn-icon-end');
  });

  it('render default button with ripple', () => {
    render(<Button disableRipple={false} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll('span');
    const ripple = spans[0];
    expect(ripple).toHaveClass('ripple');

    fireEvent.mouseDown(ripple);

    expect(ripple).toHaveStyle('height: 0px');
  });

  it('render default button without ripple', () => {
    render(<Button disableRipple={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll('span');
    const ripple = spans[0];

    expect(ripple).toBe(undefined);
  });

  it('render default button with ripple and link', () => {
    render(<Button disableRipple={false} href="https://www.google.com" />);

    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll('span');
    const ripple = spans[0];
    expect(ripple).toHaveClass('ripple');

    fireEvent.mouseDown(ripple);

    expect(ripple).toHaveStyle('height: 0px');
  });

  it('render default button with link and without ripple', () => {
    render(<Button disableRipple={true} href="https://www.google.com" />);

    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll('span');
    const ripple = spans[0];

    expect(ripple).toBe(undefined);
  });

  it('Render contained button', () => {
    render(<Button variant="contained" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Render contained button with link', () => {
    render(<Button variant="contained" href="https://www.google.com" />);
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('render small button contained', () => {
    render(<Button variant="contained" size="small" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-small');
  });

  it('render medium button contained', () => {
    render(<Button variant="contained" size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-medium');
  });

  it('render large button contained', () => {
    render(<Button variant="contained" size="large" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-large');
  });

  it('render primary button contained', () => {
    render(<Button variant="contained" color="primary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
  });

  it('render secondary button contained', () => {
    render(<Button variant="contained" color="secondary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-secondary');
  });

  it('render success button contained', () => {
    render(<Button variant="contained" color="success" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-success');
  });

  it('render info button contained', () => {
    render(<Button variant="contained" color="info" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-info');
  });

  it('render warning button contained', () => {
    render(<Button variant="contained" color="warning" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-warning');
  });

  it('render danger button contained', () => {
    render(<Button variant="contained" color="danger" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-danger');
  });

  it('render disabled button contained', () => {
    render(<Button variant="contained" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-disabled-contained');
  });

  it('Render outlined button', () => {
    render(<Button variant="outlined" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Render outlined button with link', () => {
    render(<Button variant="outlined" href="https://www.google.com" />);
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('render small button outlined', () => {
    render(<Button variant="outlined" size="small" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-small');
  });

  it('render medium button outlined', () => {
    render(<Button variant="outlined" size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-medium');
  });

  it('render large button outlined', () => {
    render(<Button variant="outlined" size="large" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-large');
  });

  it('render primary button outlined', () => {
    render(<Button variant="outlined" color="primary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
  });

  it('render secondary button outlined', () => {
    render(<Button variant="outlined" color="secondary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-secondary');
  });

  it('render success button outlined', () => {
    render(<Button variant="outlined" color="success" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-success');
  });

  it('render info button outlined', () => {
    render(<Button variant="outlined" color="info" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-info');
  });

  it('render warning button outlined', () => {
    render(<Button variant="outlined" color="warning" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-warning');
  });

  it('render danger button outlined', () => {
    render(<Button variant="outlined" color="danger" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-danger');
  });

  it('render disabled button outlined', () => {
    render(<Button variant="outlined" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-disabled-outlined');
  });

  it('Render text button', () => {
    render(<Button variant="text" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Render text button with link', () => {
    render(<Button variant="text" href="https://www.google.com" />);
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', 'https://www.google.com');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('render small button text', () => {
    render(<Button variant="text" size="small" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-small');
  });

  it('render medium button text', () => {
    render(<Button variant="text" size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-medium');
  });

  it('render large button text', () => {
    render(<Button variant="text" size="large" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-large');
  });

  it('render primary button text', () => {
    render(<Button variant="text" color="primary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
  });

  it('render secondary button text', () => {
    render(<Button variant="text" color="secondary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-secondary');
  });

  it('render success button text', () => {
    render(<Button variant="text" color="success" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-success');
  });

  it('render info button text', () => {
    render(<Button variant="text" color="info" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-info');
  });

  it('render warning button text', () => {
    render(<Button variant="text" color="warning" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-warning');
  });

  it('render danger button text', () => {
    render(<Button variant="text" color="danger" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-danger');
  });

  it('render disabled button text', () => {
    render(<Button variant="text" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-disabled-text');
  });
});
