import React, { FC } from 'react';
import { CheckboxProps } from './Checkbox.types';

import { useTheme } from 'styled-components';
import { LightTheme } from '../../Utils/Theme/Theme';
import { StyledCheckbox, StyledInput, StyledSpan } from './Checkbox.styled';

const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  label = 'Checbkox Label',
  color = 'primary',
  disabled = false,
  inputRef,
  onChange = () => null,
  ...props
}) => {
  const currentTheme = useTheme();
  const defaultTheme = LightTheme;

  return (
    <StyledCheckbox>
      <StyledInput
        type="checkbox"
        checked={checked}
        ref={inputRef}
        onChange={onChange}
        color={color}
        disabled={disabled}
        theme={currentTheme || defaultTheme}
        {...props}
      />
      <StyledSpan theme={currentTheme || defaultTheme}>{label}</StyledSpan>
    </StyledCheckbox>
  );
};

export default Checkbox;
