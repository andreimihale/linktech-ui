import { render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('components/Inputs/ButtonGroup', () => {
  it('render default button group with default buttons', () => {
    const { container } = render(<ButtonGroup />);

    const buttonGroup = container.querySelector('.btn-group');

    expect(buttonGroup).toBeInTheDocument();
  });
});
