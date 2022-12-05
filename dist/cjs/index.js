'use strict';
var e = require('react'),
  r = require('styled-components');
function o(e, r) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      r.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var t = 0;
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      r.indexOf(n[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[t]) &&
        (o[n[t]] = e[n[t]]);
  }
  return o;
}
const n = (e, r = 'primary') =>
    'inherit' === e.color
      ? 'inherit'
      : e.theme.colors[r] || e.theme.colors.primary,
  t = (e, r = 'primary') =>
    'inherit' === e.color
      ? 'inherit'
      : e.theme.colors[`${r}Contrast`] || e.theme.colors.primaryContrast,
  a = r.button`
  position: relative;
  overflow: hidden;
  display: inline-block;
  font-size: ${(e) => e.theme.fontSizes.base};
  cursor: pointer;
  font-weight: ${(e) => e.theme.fontWeights.bold};
  line-height: ${(e) => e.theme.lineHeights.xs};
  padding: ${(e) =>
    'small' === e.size
      ? '7px 25px 8px'
      : 'medium' === e.size
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  border-radius: ${(e) => e.theme.radii.xs};
  outline: 0;
  box-shadow: ${(e) => e.theme.shadow.sm};
  transition: ${(e) => (e.disableRipple ? 'none' : 'background 400ms')};
`,
  l = r(a)`
  border: ${(e) => e.theme.borderWeights.none};
  color: ${(e) => n(e, e.color)};
  box-shadow: none;
  background: transparent;

  :hover {
    background-color: ${(e) => t(e, e.color)};
  }
`,
  c = r(a)`
  border: ${(e) => e.theme.borderWeights.light} solid
    ${(e) => n(e, e.color)};
  background: transparent;
  color: ${(e) => n(e, e.color)};

  :hover {
    background-color: ${(e) => t(e, e.color)};
  }
`,
  s = r(a)`
  background-color: ${(e) => n(e, e.color)};
  color: ${(e) =>
    ((e, r = 'primary') =>
      'inherit' === e.color
        ? 'inherit'
        : e.theme.colors[`${r}Contrast`] || e.theme.colors.primaryContrast)(
      e,
      e.color
    )};
  border: ${(e) => e.theme.borderWeights.none};

  :hover {
    background-color: ${(e) => t(e, e.color)};
    color: ${(e) => n(e, e.color)};
  }
`,
  i = {
    blue100: '#CBECFE',
    blue200: '#98D5FD',
    blue300: '#64B8FB',
    blue400: '#3D9DF7',
    blue500: '#0071F2',
    blue600: '#0057D0',
    blue700: '#0040AE',
    blue800: '#002D8C',
    blue900: '#002074',
  },
  d = {
    accent50: '#ECEDEE',
    accent100: '#F1F5F6',
    accent200: '#E3EBEE',
    accent300: '#BFC7CC',
    accent400: '#8C9499',
    accent500: '#4C5155',
    accent600: '#374049',
    accent700: '#26303D',
    accent800: '#182231',
    accent900: '#0E1728',
  },
  p = { link: i.blue700 },
  m = Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign({ white: '#ffffff', black: '#000000' }, i),
                      {
                        purple100: '#EDD1F9',
                        purple200: '#D8A5F4',
                        purple300: '#B373DE',
                        purple400: '#894BBD',
                        purple500: '#571D91',
                        purple600: '#43157C',
                        purple700: '#320E68',
                        purple800: '#230954',
                        purple900: '#180545',
                      }
                    ),
                    {
                      green100: '#ECFBD3',
                      green200: '#D5F8A8',
                      green300: '#B2EA79',
                      green400: '#8ED555',
                      green500: '#5EBA25',
                      green600: '#459F1B',
                      green700: '#308512',
                      green800: '#1F6B0B',
                      green900: '#125907',
                    }
                  ),
                  {
                    yellow100: '#FFF6D9',
                    yellow200: '#FFEAB3',
                    yellow300: '#FFDC8D',
                    yellow400: '#FFCD71',
                    yellow500: '#FFB642',
                    yellow600: '#DB9230',
                    yellow700: '#B77121',
                    yellow800: '#935315',
                    yellow900: '#7A3E0C',
                  }
                ),
                {
                  red100: '#FFE6D6',
                  red200: '#FFC6AE',
                  red300: '#FFA085',
                  red400: '#FF7B67',
                  red500: '#FF3F35',
                  red600: '#DB262C',
                  red700: '#B71A2D',
                  red800: '#93102B',
                  red900: '#7A0A2A',
                }
              ),
              {
                orange100: '#FDF3CD',
                orange200: '#FBE49C',
                orange300: '#F5CE69',
                orange400: '#EBB743',
                orange500: '#df950b',
                orange600: '#BF7908',
                orange700: '#A05F05',
                orange800: '#814703',
                orange900: '#6B3702',
              }
            ),
            {
              cyan100: '#D8FEF9',
              cyan200: '#B2FDFA',
              cyan300: '#8BF7FB',
              cyan400: '#6DE8F7',
              cyan500: '#3ED1F2',
              cyan600: '#2DA5D0',
              cyan700: '#1F7EAE',
              cyan800: '#135A8C',
              cyan900: '#0B4174',
            }
          ),
          {
            pink100: '#FAC8D9',
            pink200: '#F694BD',
            pink300: '#E65CA4',
            pink400: '#CD3393',
            pink500: '#AD007C',
            pink600: '#940079',
            pink700: '#7C0071',
            pink800: '#630064',
            pink900: '#4A0053',
          }
        ),
        {
          gray100: '#F1F5F6',
          gray200: '#E3EBEE',
          gray300: '#BFC7CC',
          gray400: '#8C9499',
          gray500: '#4C5155',
          gray600: '#374049',
          gray700: '#26303D',
          gray800: '#182231',
          gray900: '#0E1728',
        }
      ),
      d
    ),
    p
  ),
  g = {
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono';",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      base: 1.5,
      md: 1.5,
      lg: 1.75,
      xl: 1.75,
      '2xl': 2,
      '3xl': 2.25,
      '4xl': 2.5,
      '5xl': 1,
      '6xl': 1,
      '7xl': 1,
      '8xl': 1,
      '9xl': 1,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px',
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    borderWeights: {
      none: '0',
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px',
    },
    spacing: {
      0: '0rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.375rem',
      xl: '2.25rem',
      '2xl': '3rem',
      '3xl': '5rem',
      '4xl': '10rem',
      '5xl': '14rem',
      '6xl': '18rem',
      '7xl': '24rem',
      '8xl': '32rem',
      '9xl': '40rem',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      screen: '100vw',
      full: '100%',
      px: '1px',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999',
    },
  },
  b = Object.assign(
    Object.assign(
      {
        colors: Object.assign(Object.assign({}, m), {
          background: m.white,
          backgroundAlpha: 'rgba(255, 255, 255, 0.6)',
          backgroundContrast: d.accent100,
          foreground: m.black,
          text: d.accent900,
          buttonText: d.accent50,
          border: 'rgba(255, 255, 255, 0.15)',
          primary: m.blue500,
          primaryLight: m.blue800,
          primaryHover: m.blue700,
          primaryActive: m.blue600,
          primaryContrast: m.blue100,
          primaryBorder: m.blue600,
          primaryBorderHover: m.blue500,
          primarySolidHover: m.blue400,
          primarySolidContrast: d.accent300,
          primaryShadow: m.blue600,
          secondary: m.purple500,
          secondaryLight: m.purple800,
          secondaryHover: m.purple700,
          secondaryActive: m.purple600,
          secondaryContrast: m.purple100,
          secondaryBorder: m.purple600,
          secondaryBorderHover: m.purple500,
          secondarySolidHover: m.purple400,
          secondarySolidContrast: d.accent300,
          secondaryShadow: m.purple600,
          tertiary: m.red500,
          tertiaryLight: m.red800,
          tertiaryHover: m.red700,
          tertiaryActive: m.red600,
          tertiaryContrast: m.red100,
          tertiaryBorder: m.red600,
          tertiaryBorderHover: m.red500,
          tertiarySolidHover: m.red400,
          tertiarySolidContrast: d.accent300,
          tertiaryShadow: m.red600,
          success: m.green500,
          successLight: m.green800,
          successHover: m.green700,
          successActive: m.green600,
          successContrast: m.green100,
          successBorder: m.green600,
          successBorderHover: m.green500,
          successSolidHover: m.green400,
          successSolidContrast: d.accent300,
          successShadow: m.green600,
          info: m.cyan500,
          infoLight: m.cyan800,
          infoHover: m.cyan700,
          infoActive: m.cyan600,
          infoContrast: d.accent900,
          infoBorder: m.cyan600,
          infoBorderHover: m.cyan500,
          infoSolidHover: m.cyan400,
          infoSolidContrast: d.accent300,
          infoShadow: m.cyan600,
          warning: m.yellow500,
          warningLight: m.yellow800,
          warningHover: m.yellow700,
          warningActive: m.yellow600,
          warningContrast: m.yellow100,
          warningBorder: m.yellow600,
          warningBorderHover: m.yellow500,
          warningSolidHover: m.yellow400,
          warningSolidContrast: d.accent300,
          warningShadow: m.yellow600,
          danger: m.red500,
          dangerLight: m.red800,
          dangerHover: m.red700,
          dangerActive: m.red600,
          dangerContrast: m.red100,
          dangerBorder: m.red600,
          dangerBorderHover: m.red500,
          dangerSolidHover: m.red400,
          dangerSolidContrast: d.accent300,
          dangerShadow: m.red600,
        }),
      },
      g
    ),
    {
      shadow: {
        xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
        sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
        md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
        lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
        xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)',
      },
      dropShadow: {
        xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
        sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
        md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))',
        lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
        xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))',
      },
    }
  );
Object.assign(
  Object.assign(
    {
      colors: Object.assign(Object.assign({}, m), {
        background: m.black,
        backgroundAlpha: 'rgba(0,0,0,0.6)',
        backgroundContrast: d.accent900,
        foreground: m.white,
        text: d.accent50,
        buttonText: d.accent900,
        border: 'rgba(0,0,0,0.15)',
        primary: m.blue500,
        primaryLight: m.blue200,
        primaryHover: m.blue300,
        primaryActive: m.blue400,
        primaryContrast: d.accent600,
        primaryBorder: m.blue400,
        primaryBorderHover: m.blue500,
        primarySolidHover: m.blue600,
        primarySolidContrast: d.accent700,
        primaryShadow: m.blue400,
        secondary: m.purple500,
        secondaryLight: m.purple200,
        secondaryHover: m.purple300,
        secondaryActive: m.purple400,
        secondaryContrast: d.accent600,
        secondaryBorder: m.purple400,
        secondaryBorderHover: m.purple500,
        secondarySolidHover: m.purple600,
        secondarySolidContrast: d.accent700,
        secondaryShadow: m.purple400,
        tertiary: m.red500,
        tertiaryLight: m.red200,
        tertiaryHover: m.red300,
        tertiaryActive: m.red400,
        tertiaryContrast: d.accent600,
        tertiaryBorder: m.red400,
        tertiaryBorderHover: m.red500,
        tertiarySolidHover: m.red600,
        tertiarySolidContrast: d.accent700,
        tertiaryShadow: m.red400,
        success: m.green500,
        successLight: m.green200,
        successHover: m.green300,
        successActive: m.green400,
        successContrast: d.accent600,
        successBorder: m.green400,
        successBorderHover: m.green500,
        successSolidHover: m.green600,
        successSolidContrast: d.accent700,
        successShadow: m.green400,
        info: m.cyan500,
        infoLight: m.cyan200,
        infoHover: m.cyan300,
        infoActive: m.cyan400,
        infoContrast: d.accent600,
        infoBorder: m.cyan400,
        infoBorderHover: m.cyan500,
        infoSolidHover: m.cyan600,
        infoSolidContrast: d.accent700,
        infoShadow: m.cyan400,
        warning: m.yellow500,
        warningLight: m.yellow200,
        warningHover: m.yellow300,
        warningActive: m.yellow400,
        warningContrast: d.accent600,
        warningBorder: m.yellow400,
        warningBorderHover: m.yellow500,
        warningSolidHover: m.yellow600,
        warningSolidContrast: d.accent700,
        warningShadow: m.yellow400,
        danger: m.red500,
        dangerLight: m.red200,
        dangerHover: m.red300,
        dangerActive: m.red400,
        dangerContrast: d.accent600,
        dangerBorder: m.red400,
        dangerBorderHover: m.red500,
        dangerSolidHover: m.red600,
        dangerSolidContrast: d.accent700,
        dangerShadow: m.red400,
      }),
    },
    g
  ),
  {
    shadow: {
      xs: '0 2px 8px 1px rgb(0 0 0 / 0.07), 0 1px 1px -1px rgb(0 0 0 / 0.04)',
      sm: '0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
      md: '0 12px 20px 6px rgb(0 0 0 / 0.08)',
      lg: '0 12px 34px 6px rgb(0 0 0 / 0.18)',
      xl: '0 25px 65px 0px rgb(0 0 0 / 0.35)',
    },
    dropShadow: {
      xs: 'drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))',
      sm: 'drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))',
      md: 'drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))',
      lg: 'drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))',
      xl: 'drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))',
    },
  }
),
  Object.assign({}, b);
const x = r.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(e) =>
      e.disabled
        ? e.theme.colors.primarySolidContrast
        : e.error
        ? e.theme.colors.danger
        : e.success
        ? e.theme.colors.success
        : e.theme.colors.info};
  background-color: ${(e) => e.theme.colors.white};
  &:focus {
    border: ${(e) =>
      `solid ${e.theme.borderWeights.normal} ${e.theme.colors.border}`};
  }
`,
  h = r.div`
  font-size: 14px;
  color: ${(e) =>
    e.disabled ? e.theme.colors.primarySolidContrast : e.theme.colors.black};
  padding-bottom: 6px;
`,
  y = r.div`
  font-size: 14px;
  color: ${(e) => e.theme.colors.text};
  padding-top: 4px;
`,
  u = r.p`
  margin: 0px;
  color: ${(e) =>
    e.disabled
      ? e.theme.colors.primarySolidContrast
      : e.error
      ? e.theme.colors.danger
      : e.success
      ? e.theme.colors.success
      : e.theme.colors.info};
`,
  w = (e, r = 'primary') =>
    'inherit' === e.color
      ? 'inherit'
      : e.theme.colors[`${r}Contrast`] || e.theme.colors.primaryContrast,
  C = r.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  font-size: 1.125rem;
`,
  v = r.input`
  -webkit-appearance: none;
  appearance: none;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: ${(e) => e.theme.borderWeights.normal} solid
    ${(e) =>
      ((e, r = 'primary') =>
        'inherit' === e.color
          ? 'inherit'
          : e.theme.colors[`${r}Border`] || e.theme.colors.primaryBorder)(
        e,
        e.color
      )};
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
    background-color: ${(e) =>
      ((e, r = 'primary') =>
        'inherit' === e.color
          ? 'inherit'
          : e.theme.colors[`${r}Active`] || e.theme.colors.primaryActive)(
        e,
        e.color
      )};
    position: relative;
    &::before {
      width: 4px;
      height: 9px;
      margin: 1px 5px;
      border-bottom: ${(e) => e.theme.borderWeights.normal} solid
        ${(e) => w(e, e.color)};
      border-right: ${(e) => e.theme.borderWeights.normal} solid
        ${(e) => w(e, e.color)};
      transform: rotate(45deg);
      z-index: ${(e) => e.theme.zIndices[5]};
    }
  }
`,
  f = r.span`
  font-size: ${(e) => e.theme.fontSizes.xl};
  color: ${(e) => e.theme.colors.text};
`;
(exports.Button = (n) => {
  var {
      children: t = 'My Button',
      classes: a,
      color: i = 'primary',
      disabled: d,
      href: p,
      size: m = 'large',
      variant: g = 'contained',
      onClick: x = () => null,
    } = n,
    h = o(n, [
      'children',
      'classes',
      'color',
      'disabled',
      'href',
      'size',
      'variant',
      'onClick',
    ]);
  const y = r.useTheme(),
    u = b;
  return e.createElement(
    e.Fragment,
    null,
    p &&
      'text' === g &&
      e.createElement(
        'a',
        { href: p, target: '_blank', rel: 'noopener noreferrer' },
        e.createElement(
          l,
          Object.assign(
            {
              type: 'button',
              className: a,
              disabled: d,
              size: m,
              color: i,
              theme: y || u,
              onClick: x,
            },
            h
          ),
          t
        )
      ),
    p &&
      'outlined' === g &&
      e.createElement(
        'a',
        { href: p, target: '_blank', rel: 'noopener noreferrer' },
        e.createElement(
          c,
          Object.assign(
            {
              type: 'button',
              className: a,
              disabled: d,
              size: m,
              color: i,
              theme: y || u,
              onClick: x,
            },
            h
          ),
          t
        )
      ),
    p &&
      'contained' === g &&
      e.createElement(
        'a',
        { href: p, target: '_blank', rel: 'noopener noreferrer' },
        e.createElement(
          s,
          Object.assign(
            {
              type: 'button',
              className: a,
              disabled: d,
              size: m,
              color: i,
              theme: y || u,
            },
            h,
            { onClick: x }
          ),
          t
        )
      ),
    !p &&
      'text' === g &&
      e.createElement(
        l,
        Object.assign(
          {
            type: 'button',
            className: a,
            disabled: d,
            size: m,
            color: i,
            theme: y || u,
            onClick: x,
          },
          h
        ),
        t
      ),
    !p &&
      'outlined' === g &&
      e.createElement(
        c,
        Object.assign(
          {
            type: 'button',
            className: a,
            disabled: d,
            size: m,
            color: i,
            theme: y || u,
            onClick: x,
          },
          h
        ),
        t
      ),
    !p &&
      'contained' === g &&
      e.createElement(
        s,
        Object.assign(
          {
            type: 'button',
            className: a,
            disabled: d,
            size: m,
            color: i,
            theme: y || u,
            onClick: x,
          },
          h
        ),
        t
      )
  );
}),
  (exports.Checkbox = (n) => {
    var {
        checked: t = !1,
        label: a = 'Checbkox Label',
        color: l = 'primary',
        disabled: c = !1,
        inputRef: s,
        onChange: i = () => null,
      } = n,
      d = o(n, [
        'checked',
        'label',
        'color',
        'disabled',
        'inputRef',
        'onChange',
      ]);
    const p = r.useTheme(),
      m = b;
    return e.createElement(
      C,
      null,
      e.createElement(
        v,
        Object.assign(
          {
            type: 'checkbox',
            checked: t,
            ref: s,
            onChange: i,
            color: l,
            disabled: c,
            theme: p || m,
          },
          d
        )
      ),
      e.createElement(f, { theme: p || m }, a)
    );
  }),
  (exports.TextField = (n) => {
    var {
        id: t = '1',
        disabled: a = !1,
        label: l = 'Label',
        message: c,
        error: s = !1,
        success: i = !1,
        onChange: d = () => null,
        placeholder: p = 'Placeholder',
      } = n,
      m = o(n, [
        'id',
        'disabled',
        'label',
        'message',
        'error',
        'success',
        'onChange',
        'placeholder',
      ]);
    const g = r.useTheme(),
      w = b;
    return e.createElement(
      e.Fragment,
      null,
      e.createElement(
        h,
        { theme: g || w },
        e.createElement(
          u,
          { disabled: a, error: s, success: i, theme: g || w },
          l
        )
      ),
      e.createElement(
        x,
        Object.assign(
          {
            theme: g || w,
            id: t,
            type: 'text',
            onChange: d,
            disabled: a,
            error: s,
            success: i,
            placeholder: p,
          },
          m
        )
      ),
      e.createElement(
        y,
        { theme: g || w },
        e.createElement(u, { error: s, theme: g || w }, c)
      )
    );
  });
//# sourceMappingURL=index.js.map
