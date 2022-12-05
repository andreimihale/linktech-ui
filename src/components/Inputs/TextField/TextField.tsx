import React, { FC } from 'react';
import { TextFieldProps } from './TextField.types';
import {
  StyledLabel,
  StyledText,
  StyledInput,
  StyledMessage,
} from './TextField.styled';
import { useTheme } from 'styled-components';
import { LightTheme } from '../../Utils/Theme/Theme';

const Input: FC<TextFieldProps> = ({
  id = '1',
  disabled = false,
  label = 'Label',
  message,
  error = false,
  success = false,
  onChange = () => null,
  placeholder = 'Placeholder',
  ...props
}) => {
  const currentTheme = useTheme();
  const defaultTheme = LightTheme;

  return (
    <>
      <StyledLabel theme={currentTheme || defaultTheme}>
        <StyledText
          disabled={disabled}
          error={error}
          success={success}
          theme={currentTheme || defaultTheme}
        >
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        theme={currentTheme || defaultTheme}
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage theme={currentTheme || defaultTheme}>
        <StyledText error={error} theme={currentTheme || defaultTheme}>
          {message}
        </StyledText>
      </StyledMessage>
    </>
  );
};

export default Input;
