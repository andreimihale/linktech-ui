import styled from 'styled-components';
import { CheckboxProps } from './Checkbox.types';

const StyledBorderColor = (props: any, color = 'primary') => {
  if (props.color === 'inherit') {
    return 'inherit';
  } else {
    return (
      props.theme.colors[`${color}Border`] || props.theme.colors.primaryBorder
    );
  }
};

const StyledActiveColor = (props: any, color = 'primary') => {
  if (props.color === 'inherit') {
    return 'inherit';
  } else {
    return (
      props.theme.colors[`${color}Active`] || props.theme.colors.primaryActive
    );
  }
};

const StyledContrastColor = (props: any, color = 'primary') => {
  if (props.color === 'inherit') {
    return 'inherit';
  } else {
    return (
      props.theme.colors[`${color}Contrast`] ||
      props.theme.colors.primaryContrast
    );
  }
};

export const StyledCheckbox = styled.label<CheckboxProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  font-size: 1.125rem;
`;

export const StyledInput = styled.input<CheckboxProps>`
  -webkit-appearance: none;
  appearance: none;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: ${(props) => props.theme.borderWeights.normal} solid
    ${(props) => StyledBorderColor(props, props.color)};
  outline: none;
  cursor: pointer;

  &:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;

    &:checked {
      background-color: #c0c0c0;
    }
  }

  &:disabled + span {
    color: #c0c0c0;
  }

  &:before {
    content: '';
    display: block;
    transition: transform 200ms;
  }

  &:checked {
    background-color: ${(props) => StyledActiveColor(props, props.color)};
    position: relative;
    &::before {
      width: 4px;
      height: 9px;
      margin: 1px 5px;
      border-bottom: ${(props) => props.theme.borderWeights.normal} solid
        ${(props) => StyledContrastColor(props, props.color)};
      border-right: ${(props) => props.theme.borderWeights.normal} solid
        ${(props) => StyledContrastColor(props, props.color)};
      transform: rotate(45deg);
      z-index: ${(props) => props.theme.zIndices[5]};
    }
  }
`;

export const StyledSpan = styled.span<CheckboxProps>`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
`;
