import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

/**
 * Button component
 * @type size { 'small' | 'medium' | 'large' } [size='small'] - Button size
 * @type primary {true | false} [primary=true] - if button is primary or not
 * @type disabled {true | false} [disabled=false] - if button is disabled or not
 * @type text {String}  [text='My Button']  - Button text
 * @returns
 */

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
