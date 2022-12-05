import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledColor = (props: any, color = 'primary') => {
  if (props.color === 'inherit') {
    return 'inherit';
  } else {
    return props.theme.colors[color] || props.theme.colors.primary;
  }
};
const StyledHoverColor = (props: any, color = 'primary') => {
  if (props.color === 'inherit') {
    return 'inherit';
  } else {
    return (
      props.theme.colors[`${color}Contrast`] ||
      props.theme.colors.primaryContrast
    );
  }
};

const StyledButtonTextColor = (props: any, color = 'primary') => {
  if (props.color === 'inherit') {
    return 'inherit';
  } else {
    return (
      props.theme.colors[`${color}Contrast`] ||
      props.theme.colors.primaryContrast
    );
  }
};

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.base};
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.xs};
  padding: ${(props) => {
    if (props.size === 'small') {
      return '7px 25px 8px';
    } else if (props.size === 'medium') {
      return '9px 30px 11px';
    }
    return '14px 30px 16px';
  }};
  border-radius: ${(props) => props.theme.radii.xs};
  outline: 0;
  box-shadow: ${(props) => props.theme.shadow.sm};
  transition: ${(props) => (props.disableRipple ? 'none' : 'background 400ms')};
`;

export const StyledTextButton = styled(StyledButton)<ButtonProps>`
  border: ${(props) => props.theme.borderWeights.none};
  color: ${(props) => StyledColor(props, props.color)};
  box-shadow: none;
  background: transparent;

  :hover {
    background-color: ${(props) => StyledHoverColor(props, props.color)};
  }
`;

export const StyledOutlinedButton = styled(StyledButton)<ButtonProps>`
  border: ${(props) => props.theme.borderWeights.light} solid
    ${(props) => StyledColor(props, props.color)};
  background: transparent;
  color: ${(props) => StyledColor(props, props.color)};

  :hover {
    background-color: ${(props) => StyledHoverColor(props, props.color)};
  }
`;

export const StyledContainedButton = styled(StyledButton)<ButtonProps>`
  background-color: ${(props) => StyledColor(props, props.color)};
  color: ${(props) => StyledButtonTextColor(props, props.color)};
  border: ${(props) => props.theme.borderWeights.none};

  :hover {
    background-color: ${(props) => StyledHoverColor(props, props.color)};
    color: ${(props) => StyledColor(props, props.color)};
  }
`;
