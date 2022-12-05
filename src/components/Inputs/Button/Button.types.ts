export interface ButtonProps {
  children?: React.ReactNode;
  classes?: string;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
  disabled?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
