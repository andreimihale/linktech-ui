import { FC } from 'react';
import { ButtonProps } from './Button.types';
/**
 * Button component
 * @type size { 'small' | 'medium' | 'large' } [size='small'] - Button size
 * @type primary {true | false} [primary=true] - if button is primary or not
 * @type disabled {true | false} [disabled=false] - if button is disabled or not
 * @type text {String}  [text='My Button']  - Button text
 * @returns
 */
declare const Button: FC<ButtonProps>;
export default Button;
