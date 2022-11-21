import { MouseEventHandler, FC, ChangeEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;
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

export { Button, Input as TextField };
