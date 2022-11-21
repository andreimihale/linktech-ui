import React, { FC, Fragment } from 'react';
import { TextFieldProps } from './TextField.types';
import {
  StyledLabel,
  StyledText,
  StyledInput,
  StyledMessage,
} from './TextField.styled';

const Input: FC<TextFieldProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </Fragment>
  );
};

export default Input;
