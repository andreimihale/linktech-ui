import styled from 'styled-components';
import { TextFieldProps } from './TextField.types';

export const StyledInput = styled.input<TextFieldProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? props.theme.colors.primarySolidContrast
        : props.error
        ? props.theme.colors.danger
        : props.success
        ? props.theme.colors.success
        : props.theme.colors.info};
  background-color: ${(props) => props.theme.colors.white};
  &:focus {
    border: ${(props) =>
      `solid ${props.theme.borderWeights.normal} ${props.theme.colors.border}`};
  }
`;

export const StyledLabel = styled.div<TextFieldProps>`
  font-size: 14px;
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.primarySolidContrast
      : props.theme.colors.black};
  padding-bottom: 6px;
`;

export const StyledMessage = styled.div<TextFieldProps>`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  padding-top: 4px;
`;

export const StyledText = styled.p<TextFieldProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.primarySolidContrast
      : props.error
      ? props.theme.colors.danger
      : props.success
      ? props.theme.colors.success
      : props.theme.colors.info};
`;
