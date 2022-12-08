import { render } from '@testing-library/react';
import Backdrop from './Backdrop';

describe('components/Utils/Backdrop', () => {
  it('render Backdrop', () => {
    const { container } = render(<Backdrop />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
