import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../Theme/Theme';
// import { ThemeBasicProps } from '../Theme/Theme.types';
import { UseThemeProps } from './UseTheme.types';

const UseTheme = ({ useDark, theme, children }: UseThemeProps) => {
  const themeSelect = useDark ? DarkTheme : LightTheme;
  const themes: DefaultTheme = {
    colors: {
      ...themeSelect.colors,
      ...theme?.colors,
    },
    fonts: {
      ...themeSelect.fonts,
      ...theme?.fonts,
    },
    fontSizes: {
      ...themeSelect.fontSizes,
      ...theme?.fontSizes,
    },
    fontWeights: {
      ...themeSelect.fontWeights,
      ...theme?.fontWeights,
    },
    lineHeights: {
      ...themeSelect.lineHeights,
      ...theme?.lineHeights,
    },
    letterSpacings: {
      ...themeSelect.letterSpacings,
      ...theme?.letterSpacings,
    },
    radii: {
      ...themeSelect.radii,
      ...theme?.radii,
    },
    borderWeights: {
      ...themeSelect.borderWeights,
      ...theme?.borderWeights,
    },
    spacing: {
      ...themeSelect.spacing,
      ...theme?.spacing,
    },
    breakpoints: {
      ...themeSelect.breakpoints,
      ...theme?.breakpoints,
    },
    zIndices: {
      ...themeSelect.zIndices,
      ...theme?.zIndices,
    },
    shadow: {
      ...themeSelect.shadow,
      ...theme?.shadow,
    },
    dropShadow: {
      ...themeSelect.dropShadow,
      ...theme?.dropShadow,
    },
  };

  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};

export default UseTheme;
