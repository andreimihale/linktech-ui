import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('components/Navigation/Link', () => {
  it('render default Link', () => {
    render(<Link />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
  });

  it('render Link with custom child', () => {
    render(<Link>Custom Link</Link>);
    const link = screen.getByText('Custom Link');
    expect(link).toBeInTheDocument();
  });

  it('render default Link with startIcon', () => {
    render(<Link startIcon={<ArrowLeftIcon />}>My Link</Link>);
    const link = screen.getByText('My Link');

    expect(link).toBeInTheDocument();

    const span = link.querySelector('span');

    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('link-icon-start');
  });
  it('render default Link with endIcon', () => {
    render(<Link startIcon={<ArrowLeftIcon />}>My Link</Link>);
    const link = screen.getByText('My Link');

    expect(link).toBeInTheDocument();

    const span = link.querySelector('span');

    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('link-icon-start');
  });

  it('remder default Link with both startIcon and endIcon', () => {
    render(
      <Link startIcon={<ArrowLeftIcon />} endIcon={<ArrowLeftIcon />}>
        My Link
      </Link>
    );
    const link = screen.getByText('My Link');

    expect(link).toBeInTheDocument();

    const span = link.querySelectorAll('span');

    expect(span[0]).toBeInTheDocument();
    expect(span[0]).toHaveClass('link-icon-start');
    expect(span[1]).toBeInTheDocument();
    expect(span[1]).toHaveClass('link-icon-end');
  });

  it('render primary Link', () => {
    render(<Link color="primary" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-primary');
  });

  it('render secondary Link', () => {
    render(<Link color="secondary" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-secondary');
  });

  it('render success Link', () => {
    render(<Link color="success" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-success');
  });

  it('render info Link', () => {
    render(<Link color="info" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-info');
  });

  it('render warning Link', () => {
    render(<Link color="warning" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-warning');
  });

  it('render danger Link', () => {
    render(<Link color="danger" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-danger');
  });

  it('render small Link', () => {
    render(<Link size="small" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-small');
  });

  it('render medium Link', () => {
    render(<Link size="medium" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-medium');
  });

  it('render large Link', () => {
    render(<Link size="large" />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-large');
  });

  it('render Link with underline', () => {
    render(<Link underline />);
    const link = screen.getByText('My Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link-underline');
  });
});
