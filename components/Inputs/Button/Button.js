import PropTypes from 'prop-types';

const Button = ({
  children,
  classes,
  color,
  disabled,
  href,
  size,
  variant,
  onClick,
  ...props
}) => {
  return <button className="btn-link">Button</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'My Button',
  color: 'primary',
  size: 'large',
  variant: 'contained',
  onClick: () => null,
};

export default Button;
