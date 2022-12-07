import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavigationLink = ({
  children,
  href,
  className,
  activeClassName,
  color,
  size,
  startIcon,
  endIcon,
  underline,
  ...props
}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const linkClassName = classNames(
    'navigation-link',
    { 'navigation-link-primary': color === 'primary' },
    { 'navigation-link-secondary': color === 'secondary' },
    { 'navigation-link-success': color === 'success' },
    { 'navigation-link-info': color === 'info' },
    { 'navigation-link-warning': color === 'warning' },
    { 'navigation-link-danger': color === 'danger' },
    { 'navigation-link-small': size === 'small' },
    { 'navigation-link-medium': size === 'medium' },
    { 'navigation-link-large': size === 'large' },
    { 'navigation-link-active': currentRoute === href },
    { 'navigation-link-underline': underline },
    className,
    activeClassName
  );

  return (
    <Link href={href} className={linkClassName} passHref {...props}>
      {startIcon && (
        <span className="navigation-link-icon-start">{startIcon}</span>
      )}
      {children}
      {endIcon && <span className="navigation-link-icon-end">{endIcon}</span>}
    </Link>
  );
};

NavigationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
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

NavigationLink.defaultProps = {
  children: 'My Link',
  color: 'primary',
  href: '#',
  size: 'large',
  startIcon: null,
  endIcon: null,
  underline: false,
};

export default NavigationLink;
