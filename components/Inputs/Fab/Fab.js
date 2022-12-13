import { useId } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Fab = ({
  disabled,
  size,
  color,
  onClick,
  icon,
  children,
  className,
  disableRipple,
  ...props
}) => {
  const id = useId();

  function rippleEffect(event) {
    const btn = event.currentTarget;

    const circle = document.getElementById(id);

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;

    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;

    const ripple = btn.getElementsByClassName('fab-ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  }

  const buttonClasses = classNames(
    'fab',
    { [`fab-${size}`]: size },
    { [`fab-${color}`]: color },
    { [`fab-disabled`]: disabled },
    className
  );

  const iconClasses = classNames('fab-icon');
  return (
    <button
      onMouseDown={(event) => !disableRipple && rippleEffect(event)}
      disabled={disabled}
      size={size}
      color={color}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {icon && <span className={iconClasses}>{icon}</span>}
      {children}
      {!disableRipple && <span id={id} className="fab-ripple" />}
    </button>
  );
};

Fab.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  onClick: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.node,
  className: PropTypes.string,
  disableRipple: PropTypes.bool,
};

Fab.defaultProps = {
  disabled: false,
  size: 'medium',
  color: 'primary',
  onClick: () => null,
  disableRipple: false,
};

export default Fab;
