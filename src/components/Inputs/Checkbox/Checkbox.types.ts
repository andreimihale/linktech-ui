export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  color?: 'primary' | 'secondary';
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
