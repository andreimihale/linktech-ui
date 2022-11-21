import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('Running Test for Marbella TextField', () => {
  test('Check placeholder in TextField', () => {
    render(<TextField placeholder="Hello marbella" />);

    expect(screen.getByPlaceholderText('Hello marbella')).toHaveAttribute(
      'placeholder',
      'Hello marbella'
    );
  });

  test('renders the TextField component', async () => {
    const user = userEvent.setup();

    render(<TextField placeholder="marbella" />);

    const Input = screen.getByPlaceholderText('marbella') as HTMLInputElement;

    await user.type(Input, 'Hello world!');

    expect(Input.value).toBe('Hello world!');
  });
});
