import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Running Test for Button', () => {
  test('Render default button', () => {
    render(<Button></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Render Text Button with Link', () => {
    render(<Button variant="text" href="https://www.google.com"></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Render Outlined Button with Link', () => {
    render(<Button variant="outlined" href="https://www.google.com"></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Render Contained Button with Link', () => {
    render(<Button variant="contained" href="https://www.google.com"></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Render Text Button', () => {
    render(<Button variant="text"></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Render Outlined Button', () => {
    render(<Button variant="outlined"></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Render Contained Button', () => {
    render(<Button variant="contained"></Button>);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Check the  on ClickEvent', () => {
    render(<Button></Button>);
    screen.getByText('My Button').click();
  });

  test('Check the default  on ClickEvent', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}></Button>);
    screen.getByText('My Button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Check Button Disabled', () => {
    render(<Button disabled>Button disabled</Button>);
    expect(screen.getByText('Button disabled')).toBeDisabled();
  });
});
