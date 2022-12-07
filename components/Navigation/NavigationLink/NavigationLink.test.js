import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { render, screen, fireEvent } from '@testing-library/react';
import * as nextRouter from 'next/router';
import NavigationLink from './NavigationLink';

describe('components/Navigation/NavigationLink', () => {
  beforeEach(() => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
    }));
  });
  it('render default NavigationLink', () => {
    render(<NavigationLink />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
  });

  it('render NavigationLink with custom child', () => {
    render(<NavigationLink>Custom Link</NavigationLink>);
    const link = screen.getByText('Custom Link');
    expect(link).toBeInTheDocument();
  });

  it('render default NavigationLink with startIcon', () => {
    render(
      <NavigationLink startIcon={<ArrowLeftIcon />}>My Link</NavigationLink>
    );
    const link = screen.getByText('My Link');

    expect(link).toBeInTheDocument();

    const span = link.querySelector('span');

    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('navigation-link-icon-start');
  });
  it('render default NavigationLink with endIcon', () => {
    render(
      <NavigationLink startIcon={<ArrowLeftIcon />}>My Link</NavigationLink>
    );
    const link = screen.getByText('My Link');

    expect(link).toBeInTheDocument();

    const span = link.querySelector('span');

    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('navigation-link-icon-start');
  });

  it('remder default NavigationLink with both startIcon and endIcon', () => {
    render(
      <NavigationLink startIcon={<ArrowLeftIcon />} endIcon={<ArrowLeftIcon />}>
        My Link
      </NavigationLink>
    );
    const link = screen.getByText('My Link');

    expect(link).toBeInTheDocument();

    const span = link.querySelectorAll('span');

    expect(span[0]).toBeInTheDocument();
    expect(span[0]).toHaveClass('navigation-link-icon-start');
    expect(span[1]).toBeInTheDocument();
    expect(span[1]).toHaveClass('navigation-link-icon-end');
  });

  it('render primary NavigationLink', () => {
    render(<NavigationLink color="primary" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-primary');
  });

  it('render secondary NavigationLink', () => {
    render(<NavigationLink color="secondary" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-secondary');
  });

  it('render success NavigationLink', () => {
    render(<NavigationLink color="success" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-success');
  });

  it('render info NavigationLink', () => {
    render(<NavigationLink color="info" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-info');
  });

  it('render warning NavigationLink', () => {
    render(<NavigationLink color="warning" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-warning');
  });

  it('render danger NavigationLink', () => {
    render(<NavigationLink color="danger" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-danger');
  });

  it('render small NavigationLink', () => {
    render(<NavigationLink size="small" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-small');
  });

  it('render medium NavigationLink', () => {
    render(<NavigationLink size="medium" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-medium');
  });

  it('render large NavigationLink', () => {
    render(<NavigationLink size="large" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-large');
  });

  it('render active NavigationLink', () => {
    nextRouter.useRouter;
    render(<NavigationLink href="/" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-active');
  });

  it('render NavigationLink with underline', () => {
    render(<NavigationLink underline />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('navigation-link-underline');
  });
});
