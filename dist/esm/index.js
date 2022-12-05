import e from 'react';
import r, { useTheme as o } from 'styled-components';
function n(e, r) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      r.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]]);
  }
  return o;
}
const a = (e, r = 'primary') =>
    'inherit' === e.color
      ? 'inherit'
      : e.theme.colors[r] || e.theme.colors.primary,
  t = (e, r = 'primary') =>
    'inherit' === e.color
      ? 'inherit'
      : e.theme.colors[`${r}Contrast`] || e.theme.colors.primaryContrast,
  l = r.button`
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
  c = r(l)`
  border: ${(e) => e.theme.borderWeights.none};
  color: ${(e) => a(e, e.color)};
  box-shadow: none;
  background: transparent;

  :hover {
    background-color: ${(e) => t(e, e.color)};
  }
`,
  s = r(l)`
  border: ${(e) => e.theme.borderWeights.light} solid
    ${(e) => a(e, e.color)};
  background: transparent;
  color: ${(e) => a(e, e.color)};

  :hover {
    background-color: ${(e) => t(e, e.color)};
  }
`,
  i = r(l)`
  background-color: ${(e) => a(e, e.color)};
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
    color: ${(e) => a(e, e.color)};
  }
`,
  d = {
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
  p = {
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
  m = { link: d.blue700 },
  g = Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign({ white: '#ffffff', black: '#000000' }, d),
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
      p
    ),
    m
  ),
  b = {
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
  x = Object.assign(
    Object.assign(
      {
        colors: Object.assign(Object.assign({}, g), {
          background: g.white,
          backgroundAlpha: 'rgba(255, 255, 255, 0.6)',
          backgroundContrast: p.accent100,
          foreground: g.black,
          text: p.accent900,
          buttonText: p.accent50,
          border: 'rgba(255, 255, 255, 0.15)',
          primary: g.blue500,
          primaryLight: g.blue800,
          primaryHover: g.blue700,
          primaryActive: g.blue600,
          primaryContrast: g.blue100,
          primaryBorder: g.blue600,
          primaryBorderHover: g.blue500,
          primarySolidHover: g.blue400,
          primarySolidContrast: p.accent300,
          primaryShadow: g.blue600,
          secondary: g.purple500,
          secondaryLight: g.purple800,
          secondaryHover: g.purple700,
          secondaryActive: g.purple600,
          secondaryContrast: g.purple100,
          secondaryBorder: g.purple600,
          secondaryBorderHover: g.purple500,
          secondarySolidHover: g.purple400,
          secondarySolidContrast: p.accent300,
          secondaryShadow: g.purple600,
          tertiary: g.red500,
          tertiaryLight: g.red800,
          tertiaryHover: g.red700,
          tertiaryActive: g.red600,
          tertiaryContrast: g.red100,
          tertiaryBorder: g.red600,
          tertiaryBorderHover: g.red500,
          tertiarySolidHover: g.red400,
          tertiarySolidContrast: p.accent300,
          tertiaryShadow: g.red600,
          success: g.green500,
          successLight: g.green800,
          successHover: g.green700,
          successActive: g.green600,
          successContrast: g.green100,
          successBorder: g.green600,
          successBorderHover: g.green500,
          successSolidHover: g.green400,
          successSolidContrast: p.accent300,
          successShadow: g.green600,
          info: g.cyan500,
          infoLight: g.cyan800,
          infoHover: g.cyan700,
          infoActive: g.cyan600,
          infoContrast: p.accent900,
          infoBorder: g.cyan600,
          infoBorderHover: g.cyan500,
          infoSolidHover: g.cyan400,
          infoSolidContrast: p.accent300,
          infoShadow: g.cyan600,
          warning: g.yellow500,
          warningLight: g.yellow800,
          warningHover: g.yellow700,
          warningActive: g.yellow600,
          warningContrast: g.yellow100,
          warningBorder: g.yellow600,
          warningBorderHover: g.yellow500,
          warningSolidHover: g.yellow400,
          warningSolidContrast: p.accent300,
          warningShadow: g.yellow600,
          danger: g.red500,
          dangerLight: g.red800,
          dangerHover: g.red700,
          dangerActive: g.red600,
          dangerContrast: g.red100,
          dangerBorder: g.red600,
          dangerBorderHover: g.red500,
          dangerSolidHover: g.red400,
          dangerSolidContrast: p.accent300,
          dangerShadow: g.red600,
        }),
      },
      b
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
      colors: Object.assign(Object.assign({}, g), {
        background: g.black,
        backgroundAlpha: 'rgba(0,0,0,0.6)',
        backgroundContrast: p.accent900,
        foreground: g.white,
        text: p.accent50,
        buttonText: p.accent900,
        border: 'rgba(0,0,0,0.15)',
        primary: g.blue500,
        primaryLight: g.blue200,
        primaryHover: g.blue300,
        primaryActive: g.blue400,
        primaryContrast: p.accent600,
        primaryBorder: g.blue400,
        primaryBorderHover: g.blue500,
        primarySolidHover: g.blue600,
        primarySolidContrast: p.accent700,
        primaryShadow: g.blue400,
        secondary: g.purple500,
        secondaryLight: g.purple200,
        secondaryHover: g.purple300,
        secondaryActive: g.purple400,
        secondaryContrast: p.accent600,
        secondaryBorder: g.purple400,
        secondaryBorderHover: g.purple500,
        secondarySolidHover: g.purple600,
        secondarySolidContrast: p.accent700,
        secondaryShadow: g.purple400,
        tertiary: g.red500,
        tertiaryLight: g.red200,
        tertiaryHover: g.red300,
        tertiaryActive: g.red400,
        tertiaryContrast: p.accent600,
        tertiaryBorder: g.red400,
        tertiaryBorderHover: g.red500,
        tertiarySolidHover: g.red600,
        tertiarySolidContrast: p.accent700,
        tertiaryShadow: g.red400,
        success: g.green500,
        successLight: g.green200,
        successHover: g.green300,
        successActive: g.green400,
        successContrast: p.accent600,
        successBorder: g.green400,
        successBorderHover: g.green500,
        successSolidHover: g.green600,
        successSolidContrast: p.accent700,
        successShadow: g.green400,
        info: g.cyan500,
        infoLight: g.cyan200,
        infoHover: g.cyan300,
        infoActive: g.cyan400,
        infoContrast: p.accent600,
        infoBorder: g.cyan400,
        infoBorderHover: g.cyan500,
        infoSolidHover: g.cyan600,
        infoSolidContrast: p.accent700,
        infoShadow: g.cyan400,
        warning: g.yellow500,
        warningLight: g.yellow200,
        warningHover: g.yellow300,
        warningActive: g.yellow400,
        warningContrast: p.accent600,
        warningBorder: g.yellow400,
        warningBorderHover: g.yellow500,
        warningSolidHover: g.yellow600,
        warningSolidContrast: p.accent700,
        warningShadow: g.yellow400,
        danger: g.red500,
        dangerLight: g.red200,
        dangerHover: g.red300,
        dangerActive: g.red400,
        dangerContrast: p.accent600,
        dangerBorder: g.red400,
        dangerBorderHover: g.red500,
        dangerSolidHover: g.red600,
        dangerSolidContrast: p.accent700,
        dangerShadow: g.red400,
      }),
    },
    b
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
  Object.assign({}, x);
const h = (r) => {
    var {
        children: a = 'My Button',
        classes: t,
        color: l = 'primary',
        disabled: d,
        href: p,
        size: m = 'large',
        variant: g = 'contained',
        onClick: b = () => null,
      } = r,
      h = n(r, [
        'children',
        'classes',
        'color',
        'disabled',
        'href',
        'size',
        'variant',
        'onClick',
      ]);
    const y = o(),
      u = x;
    return e.createElement(
      e.Fragment,
      null,
      p &&
        'text' === g &&
        e.createElement(
          'a',
          { href: p, target: '_blank', rel: 'noopener noreferrer' },
          e.createElement(
            c,
            Object.assign(
              {
                type: 'button',
                className: t,
                disabled: d,
                size: m,
                color: l,
                theme: y || u,
                onClick: b,
              },
              h
            ),
            a
          )
        ),
      p &&
        'outlined' === g &&
        e.createElement(
          'a',
          { href: p, target: '_blank', rel: 'noopener noreferrer' },
          e.createElement(
            s,
            Object.assign(
              {
                type: 'button',
                className: t,
                disabled: d,
                size: m,
                color: l,
                theme: y || u,
                onClick: b,
              },
              h
            ),
            a
          )
        ),
      p &&
        'contained' === g &&
        e.createElement(
          'a',
          { href: p, target: '_blank', rel: 'noopener noreferrer' },
          e.createElement(
            i,
            Object.assign(
              {
                type: 'button',
                className: t,
                disabled: d,
                size: m,
                color: l,
                theme: y || u,
              },
              h,
              { onClick: b }
            ),
            a
          )
        ),
      !p &&
        'text' === g &&
        e.createElement(
          c,
          Object.assign(
            {
              type: 'button',
              className: t,
              disabled: d,
              size: m,
              color: l,
              theme: y || u,
              onClick: b,
            },
            h
          ),
          a
        ),
      !p &&
        'outlined' === g &&
        e.createElement(
          s,
          Object.assign(
            {
              type: 'button',
              className: t,
              disabled: d,
              size: m,
              color: l,
              theme: y || u,
              onClick: b,
            },
            h
          ),
          a
        ),
      !p &&
        'contained' === g &&
        e.createElement(
          i,
          Object.assign(
            {
              type: 'button',
              className: t,
              disabled: d,
              size: m,
              color: l,
              theme: y || u,
              onClick: b,
            },
            h
          ),
          a
        )
    );
  },
  y = r.input`
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
  u = r.div`
  font-size: 14px;
  color: ${(e) =>
    e.disabled ? e.theme.colors.primarySolidContrast : e.theme.colors.black};
  padding-bottom: 6px;
`,
  w = r.div`
  font-size: 14px;
  color: ${(e) => e.theme.colors.text};
  padding-top: 4px;
`,
  C = r.p`
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
  f = (r) => {
    var {
        id: a = '1',
        disabled: t = !1,
        label: l = 'Label',
        message: c,
        error: s = !1,
        success: i = !1,
        onChange: d = () => null,
        placeholder: p = 'Placeholder',
      } = r,
      m = n(r, [
        'id',
        'disabled',
        'label',
        'message',
        'error',
        'success',
        'onChange',
        'placeholder',
      ]);
    const g = o(),
      b = x;
    return e.createElement(
      e.Fragment,
      null,
      e.createElement(
        u,
        { theme: g || b },
        e.createElement(
          C,
          { disabled: t, error: s, success: i, theme: g || b },
          l
        )
      ),
      e.createElement(
        y,
        Object.assign(
          {
            theme: g || b,
            id: a,
            type: 'text',
            onChange: d,
            disabled: t,
            error: s,
            success: i,
            placeholder: p,
          },
          m
        )
      ),
      e.createElement(
        w,
        { theme: g || b },
        e.createElement(C, { error: s, theme: g || b }, c)
      )
    );
  },
  v = (e, r = 'primary') =>
    'inherit' === e.color
      ? 'inherit'
      : e.theme.colors[`${r}Contrast`] || e.theme.colors.primaryContrast,
  B = r.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  font-size: 1.125rem;
`,
  F = r.input`
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
        ${(e) => v(e, e.color)};
      border-right: ${(e) => e.theme.borderWeights.normal} solid
        ${(e) => v(e, e.color)};
      transform: rotate(45deg);
      z-index: ${(e) => e.theme.zIndices[5]};
    }
  }
`,
  S = r.span`
  font-size: ${(e) => e.theme.fontSizes.xl};
  color: ${(e) => e.theme.colors.text};
`,
  E = (r) => {
    var {
        checked: a = !1,
        label: t = 'Checbkox Label',
        color: l = 'primary',
        disabled: c = !1,
        inputRef: s,
        onChange: i = () => null,
      } = r,
      d = n(r, [
        'checked',
        'label',
        'color',
        'disabled',
        'inputRef',
        'onChange',
      ]);
    const p = o(),
      m = x;
    return e.createElement(
      B,
      null,
      e.createElement(
        F,
        Object.assign(
          {
            type: 'checkbox',
            checked: a,
            ref: s,
            onChange: i,
            color: l,
            disabled: c,
            theme: p || m,
          },
          d
        )
      ),
      e.createElement(S, { theme: p || m }, t)
    );
  };
export { h as Button, E as Checkbox, f as TextField };
//# sourceMappingURL=index.js.map
