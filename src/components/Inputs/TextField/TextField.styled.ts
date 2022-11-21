import styled from 'styled-components';
import { TextFieldProps } from './TextField.types';

export const StyledInput = styled.input<TextFieldProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? '#e4e3ea'
        : props.error
        ? '#a9150b'
        : props.success
        ? '#067d68'
        : '#353637'};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`;

export const StyledLabel = styled.div<TextFieldProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
  padding-bottom: 6px;
`;

export const StyledMessage = styled.div<TextFieldProps>`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`;

export const StyledText = styled.p<TextFieldProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808'};
`;
