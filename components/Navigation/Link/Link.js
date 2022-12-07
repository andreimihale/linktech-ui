import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = ({
  children,
  href,
  className,
  color,
  size,
  startIcon,
  endIcon,
  underline,
  ...props
}) => {
  const linkClassName = classNames(
    'link',
    { 'link-primary': color === 'primary' },
    { 'link-secondary': color === 'secondary' },
    { 'link-success': color === 'success' },
    { 'link-info': color === 'info' },
    { 'link-warning': color === 'warning' },
    { 'link-danger': color === 'danger' },
    { 'link-small': size === 'small' },
    { 'link-medium': size === 'medium' },
    { 'link-large': size === 'large' },
    { 'link-underline': underline },
    className
  );

  return (
    <a href={href} className={linkClassName} {...props}>
      {startIcon && <span className="link-icon-start">{startIcon}</span>}
      {children}
      {endIcon && <span className="link-icon-end">{endIcon}</span>}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  children: 'My Link',
  color: 'primary',
  href: '#',
  size: 'large',
  startIcon: null,
  endIcon: null,
  underline: false,
};

export default Link;
