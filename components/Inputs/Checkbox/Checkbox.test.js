import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('components/Inputs/Checkbox', () => {
  it('render Checkbox', () => {
    const onClick = jest.fn();
    const { container } = render(<Checkbox onClick={onClick} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
