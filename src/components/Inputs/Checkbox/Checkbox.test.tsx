import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Running Test for Checbkox', () => {
  test('Render default checkbox', () => {
    render(<Checkbox></Checkbox>);
    expect(screen.getByText('Checbkox Label')).toBeInTheDocument();
  });

  test('Render checbkox with function', () => {
    const onChange = jest.fn();
    render(<Checkbox onChange={onChange}></Checkbox>);
    screen.getByText('Checbkox Label').click();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('Render checkbox with default onChange', () => {
    render(<Checkbox></Checkbox>);
    screen.getByText('Checbkox Label').click();
  });
});
