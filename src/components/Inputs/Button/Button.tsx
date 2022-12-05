import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import {
  StyledContainedButton,
  StyledOutlinedButton,
  StyledTextButton,
} from './Button.styled';
import { useTheme } from 'styled-components';
import { LightTheme } from '../../Utils/Theme/Theme';

/**
 * Button component
 * @type size { 'small' | 'medium' | 'large' } [size='small'] - Button size
 * @type primary {true | false} [primary=true] - if button is primary or not
 * @type disabled {true | false} [disabled=false] - if button is disabled or not
 * @type text {String}  [text='My Button']  - Button text
 * @returns
 */

const Button: FC<ButtonProps> = ({
  children = 'My Button',
  classes,
  color = 'primary',
  disabled,
  href,
  size = 'large',
  variant = 'contained',
  onClick = () => null,
  ...props
}) => {
  const currentTheme = useTheme();
  const defaultTheme = LightTheme;

  return (
    <>
      {href && variant === 'text' && (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <StyledTextButton
            type="button"
            className={classes}
            disabled={disabled}
            size={size}
            color={color}
            theme={currentTheme || defaultTheme}
            onClick={onClick}
            {...props}
          >
            {children}
          </StyledTextButton>
        </a>
      )}

      {href && variant === 'outlined' && (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <StyledOutlinedButton
            type="button"
            className={classes}
            disabled={disabled}
            size={size}
            color={color}
            theme={currentTheme || defaultTheme}
            onClick={onClick}
            {...props}
          >
            {children}
          </StyledOutlinedButton>
        </a>
      )}

      {href && variant === 'contained' && (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <StyledContainedButton
            type="button"
            className={classes}
            disabled={disabled}
            size={size}
            color={color}
            theme={currentTheme || defaultTheme}
            {...props}
            onClick={onClick}
          >
            {children}
          </StyledContainedButton>
        </a>
      )}
      {!href && variant === 'text' && (
        <StyledTextButton
          type="button"
          className={classes}
          disabled={disabled}
          size={size}
          color={color}
          theme={currentTheme || defaultTheme}
          onClick={onClick}
          {...props}
        >
          {children}
        </StyledTextButton>
      )}
      {!href && variant === 'outlined' && (
        <StyledOutlinedButton
          type="button"
          className={classes}
          disabled={disabled}
          size={size}
          color={color}
          theme={currentTheme || defaultTheme}
          onClick={onClick}
          {...props}
        >
          {children}
        </StyledOutlinedButton>
      )}
      {!href && variant === 'contained' && (
        <StyledContainedButton
          type="button"
          className={classes}
          disabled={disabled}
          size={size}
          color={color}
          theme={currentTheme || defaultTheme}
          onClick={onClick}
          {...props}
        >
          {children}
        </StyledContainedButton>
      )}
    </>
  );
};

export default Button;
