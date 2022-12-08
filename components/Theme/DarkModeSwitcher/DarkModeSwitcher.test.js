import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DarkModeSwitcher from './DarkModeSwitcher';

describe('components/Theme/DarkModeSwticher', () => {
  it('should render DarkModeSwticher', () => {
    window.localStorage.setItem('theme', 'light');
    render(<DarkModeSwitcher />);
    const button = screen.getByRole('button');
    const spans = button.querySelectorAll('span');

    expect(spans[0].querySelector('svg')).toBeInTheDocument();
    expect(spans[1].querySelector('svg')).toBeInTheDocument();
  });

  it('should render DarkModeSwticher with sun onClick event', async () => {
    render(<DarkModeSwitcher />);

    const button = screen.getByRole('button');
    await act(() => fireEvent.click(button));
  });

  it('should render DarkModeSwitcher with moon onClick event', async () => {
    render(<DarkModeSwitcher enforceTheme="dark" />);

    const button = screen.getByRole('button');
    await act(() => fireEvent.click(button));
  });
});
