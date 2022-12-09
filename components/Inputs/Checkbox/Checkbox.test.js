import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('components/Inputs/Checkbox', () => {
  it('render Checkbox', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
