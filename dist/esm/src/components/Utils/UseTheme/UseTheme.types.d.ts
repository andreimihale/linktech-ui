import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
export interface UseThemeProps {
  useDark?: boolean;
  theme?: DefaultTheme;
  children?: ReactNode;
}
