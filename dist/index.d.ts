/// <reference types="react" />
import { FC, ChangeEventHandler } from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  classes?: string;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
  disabled?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button component
 * @type size { 'small' | 'medium' | 'large' } [size='small'] - Button size
 * @type primary {true | false} [primary=true] - if button is primary or not
 * @type disabled {true | false} [disabled=false] - if button is disabled or not
 * @type text {String}  [text='My Button']  - Button text
 * @returns
 */
declare const Button: FC<ButtonProps>;

interface TextFieldProps {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: FC<TextFieldProps>;

interface CheckboxProps {
  checked?: boolean;
  label?: string;
  color?: 'primary' | 'secondary';
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

declare const Checkbox: FC<CheckboxProps>;

export { Button, Checkbox, Input as TextField };
