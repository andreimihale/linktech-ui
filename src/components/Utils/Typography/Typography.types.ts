export interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'span'
    | 'label'
    | 'overline'
    | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  children?: React.ReactNode;
  class?: object;
  gutter?: 'none' | 'left' | 'right' | 'top' | 'bottom' | 'all';
  noWrap?: boolean;
  secondary?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
