import { render } from '@testing-library/react';
import Radio from './Radio';

describe('components/Inputs/Radio', () => {
  it('render Radio', () => {
    const { container } = render(<Radio name="radio" value="radio" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
