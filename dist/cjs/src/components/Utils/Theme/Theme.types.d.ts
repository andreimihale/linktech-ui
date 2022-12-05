import 'styled-components';
export interface BlueColorProps {
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
  blue900: string;
}
export interface PurpleColorProps {
  purple100: string;
  purple200: string;
  purple300: string;
  purple400: string;
  purple500: string;
  purple600: string;
  purple700: string;
  purple800: string;
  purple900: string;
}
export interface GreenColorProps {
  green100: string;
  green200: string;
  green300: string;
  green400: string;
  green500: string;
  green600: string;
  green700: string;
  green800: string;
  green900: string;
}
export interface YellowColorProps {
  yellow100: string;
  yellow200: string;
  yellow300: string;
  yellow400: string;
  yellow500: string;
  yellow600: string;
  yellow700: string;
  yellow800: string;
  yellow900: string;
}
export interface RedColorProps {
  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;
  red700: string;
  red800: string;
  red900: string;
}
export interface OrangeColorProps {
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  orange800: string;
  orange900: string;
}
export interface CyanColorProps {
  cyan100: string;
  cyan200: string;
  cyan300: string;
  cyan400: string;
  cyan500: string;
  cyan600: string;
  cyan700: string;
  cyan800: string;
  cyan900: string;
}
export interface PinkColorProps {
  pink100: string;
  pink200: string;
  pink300: string;
  pink400: string;
  pink500: string;
  pink600: string;
  pink700: string;
  pink800: string;
  pink900: string;
}
export interface GrayColorProps {
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
}
export interface AccentColorProps {
  accent50: string;
  accent100: string;
  accent200: string;
  accent300: string;
  accent400: string;
  accent500: string;
  accent600: string;
  accent700: string;
  accent800: string;
  accent900: string;
}
export interface HighlightProps {
  link: string;
}
export interface BasicColorsProps
  extends BlueColorProps,
    PurpleColorProps,
    GreenColorProps,
    YellowColorProps,
    RedColorProps,
    OrangeColorProps,
    CyanColorProps,
    PinkColorProps,
    GrayColorProps,
    AccentColorProps,
    HighlightProps {
  white: string;
  black: string;
}
export interface FontsProps {
  sans: string;
  mono: string;
}
export interface FontSizesProps {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
}
export interface FontWeightsProps {
  hairline: number;
  thin: number;
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
}
export interface LineHeightsProps {
  xs: number;
  sm: number;
  base: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
  '7xl': number;
  '8xl': number;
  '9xl': number;
}
export interface LetterSpacingsProps {
  tighter: string;
  tight: string;
  normal: string;
  wide: string;
  wider: string;
  widest: string;
}
export interface RadiiProps {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  squared: string;
  rounded: string;
  pill: string;
}
export interface BorderWeightsProps {
  none: string;
  light: string;
  normal: string;
  bold: string;
  extrabold: string;
  black: string;
}
export interface SpacingProps {
  0: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
  min: string;
  max: string;
  fit: string;
  screen: string;
  full: string;
  px: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
}
export interface BreakpointsProps {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface ZIndicesProps {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  10: string;
  max: string;
}
export interface ShadowProps {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface DropShadowProps {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface CommonProps {
  fonts: FontsProps;
  fontSizes: FontSizesProps;
  fontWeights: FontWeightsProps;
  lineHeights: LineHeightsProps;
  letterSpacings: LetterSpacingsProps;
  radii: RadiiProps;
  borderWeights: BorderWeightsProps;
  spacing: SpacingProps;
  breakpoints: BreakpointsProps;
  zIndices: ZIndicesProps;
}
export interface ShadowMixProps {
  shadow: ShadowProps;
  dropShadow: DropShadowProps;
}
export interface ColorMixProps {
  background: string;
  backgroundAlpha: string;
  backgroundContrast: string;
  foreground: string;
  text: string;
  buttonText: string;
  border: string;
  primary: string;
  primaryLight: string;
  primaryHover: string;
  primaryActive: string;
  primaryContrast: string;
  primaryBorder: string;
  primaryBorderHover: string;
  primarySolidHover: string;
  primarySolidContrast: string;
  primaryShadow: string;
  secondary: string;
  secondaryLight: string;
  secondaryHover: string;
  secondaryActive: string;
  secondaryContrast: string;
  secondaryBorder: string;
  secondaryBorderHover: string;
  secondarySolidHover: string;
  secondarySolidContrast: string;
  secondaryShadow: string;
  tertiary: string;
  tertiaryLight: string;
  tertiaryHover: string;
  tertiaryActive: string;
  tertiaryContrast: string;
  tertiaryBorder: string;
  tertiaryBorderHover: string;
  tertiarySolidHover: string;
  tertiarySolidContrast: string;
  tertiaryShadow: string;
  success: string;
  successLight: string;
  successHover: string;
  successActive: string;
  successContrast: string;
  successBorder: string;
  successBorderHover: string;
  successSolidHover: string;
  successSolidContrast: string;
  successShadow: string;
  info: string;
  infoLight: string;
  infoHover: string;
  infoActive: string;
  infoContrast: string;
  infoBorder: string;
  infoBorderHover: string;
  infoSolidHover: string;
  infoSolidContrast: string;
  infoShadow: string;
  warning: string;
  warningLight: string;
  warningHover: string;
  warningActive: string;
  warningContrast: string;
  warningBorder: string;
  warningBorderHover: string;
  warningSolidHover: string;
  warningSolidContrast: string;
  warningShadow: string;
  danger: string;
  dangerLight: string;
  dangerHover: string;
  dangerActive: string;
  dangerContrast: string;
  dangerBorder: string;
  dangerBorderHover: string;
  dangerSolidHover: string;
  dangerSolidContrast: string;
  dangerShadow: string;
}
export interface ThemeBasicProps {
  colors: BasicColorsProps & ColorMixProps;
  fonts: FontsProps;
  fontSizes: FontSizesProps;
  fontWeights: FontWeightsProps;
  lineHeights: LineHeightsProps;
  letterSpacings: LetterSpacingsProps;
  radii: RadiiProps;
  borderWeights: BorderWeightsProps;
  spacing: SpacingProps;
  breakpoints: BreakpointsProps;
  zIndices: ZIndicesProps;
  shadow: ShadowProps;
  dropShadow: DropShadowProps;
}
declare module 'styled-components' {
  interface DefaultTheme {
    colors: BasicColorsProps & ColorMixProps;
    fonts: FontsProps;
    fontSizes: FontSizesProps;
    fontWeights: FontWeightsProps;
    lineHeights: LineHeightsProps;
    letterSpacings: LetterSpacingsProps;
    radii: RadiiProps;
    borderWeights: BorderWeightsProps;
    spacing: SpacingProps;
    breakpoints: BreakpointsProps;
    zIndices: ZIndicesProps;
    shadow: ShadowProps;
    dropShadow: DropShadowProps;
  }
}
