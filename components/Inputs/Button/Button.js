import { useId } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  color,
  disabled,
  disableRipple,
  href,
  size,
  variant,
  onClick,
  target,
  rel,
  startIcon,
  endIcon,
  ...props
}) => {
  const id = useId();

  function rippleEffect(event) {
    const btn = event.currentTarget;

    const circle = document.getElementById(id);

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      document.documentElement.scrollLeft +
      event.clientX -
      (btn.offsetLeft + radius)
    }px`;

    circle.style.top = `${
      document.documentElement.scrollTop +
      event.clientY -
      (btn.offsetTop + radius)
    }px`;

    const ripple = btn.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  }

  const buttonClasses = classNames(
    'btn',
    { [`btn-${variant}`]: variant },
    { [`btn-disabled-${variant}`]: disabled },
    { [`btn-${size}`]: size },
    { [`btn-${color}`]: color },
    className
  );

  return (
    <>
      {href && (
        <a href={href} target={target} rel={rel}>
          <button
            type="button"
            className={buttonClasses}
            disabled={disabled}
            size={size}
            color={color}
            onClick={onClick}
            onMouseDown={(event) => !disableRipple && rippleEffect(event)}
            {...props}
          >
            {startIcon && <span className="btn-icon-start">{startIcon}</span>}
            {children}
            {endIcon && <span className="btn-icon-end">{endIcon}</span>}
            {!disableRipple && <span id={id} className="ripple" />}
          </button>
        </a>
      )}

      {!href && (
        <button
          type="button"
          className={buttonClasses}
          disabled={disabled}
          size={size}
          color={color}
          onClick={onClick}
          onMouseDown={(event) => !disableRipple && rippleEffect(event)}
          {...props}
        >
          {startIcon && <span className="btn-icon-start">{startIcon}</span>}
          {children}
          {endIcon && <span className="btn-icon-end">{endIcon}</span>}
          {!disableRipple && <span id={id} className="ripple" />}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  disableRipple: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

Button.defaultProps = {
  children: 'My Button',
  color: 'primary',
  size: 'large',
  variant: 'contained',
  onClick: () => null,
  target: '_parent',
  rel: 'noopener noreferrer',
  disableRipple: false,
  startIcon: null,
  endIcon: null,
};

export default Button;
