import PropTypes from 'prop-types';
import Button from '../../Inputs/Button';
import classNames from 'classnames';
import { useId } from 'react';

const Popover = ({
  isHover,
  isVisible,
  children,
  switcherText,
  title,
  className,
  color,
  size,
  isButton,
  buttonDisableRipple,
  buttonVariant,
  buttonOnClick,
  buttonStartIcon,
  buttonEndIcon,
  ...props
}) => {
  const id = useId();

  const popoverClasses = classNames('popover', className);

  const popoverContentClasses = classNames('popover__content', {
    'popover__content--visible': isVisible,
  });
  const handlePopper = () => {
    const popper = document.getElementById(id);
    popper.classList.toggle('popover__content--visible');
  };

  const mouseOver = () => {
    const popper = document.getElementById(id);
    !popper.classList.contains('popover__content--visible') && handlePopper();
  };

  const mouseOut = () => {
    const popper = document.getElementById(id);
    popper.classList.contains('popover__content--visible') && handlePopper();
  };

  return (
    <>
      <div className={popoverClasses} {...props}>
        {isButton && (
          <Button
            color={color}
            size={size}
            variant={buttonVariant}
            onClick={() => {
              buttonOnClick();
              !isHover && handlePopper();
            }}
            onMouseEnter={() => isHover && mouseOver()}
            onMouseOut={() => isHover && mouseOut()}
            startIcon={buttonStartIcon}
            endIcon={buttonEndIcon}
            disableRipple={buttonDisableRipple}
            className="popover__button"
          >
            {switcherText}
          </Button>
        )}
        {!isButton && (
          <label
            className="popover__label"
            onClick={() => !isHover && handlePopper()}
            onMouseEnter={() => isHover && mouseOver()}
            onMouseOut={() => isHover && mouseOut()}
          >
            {switcherText}
          </label>
        )}
        <div id={id} role="tooltip" className={popoverContentClasses}>
          {title && (
            <div className="popover__title">
              <h3 className="popover__title-text">{title}</h3>
            </div>
          )}
          <div className="popover__text">{children}</div>
        </div>
      </div>
    </>
  );
};

Popover.propTypes = {
  isHover: PropTypes.bool,
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  isButton: PropTypes.bool,
  switcherText: PropTypes.string.isRequired,
  buttonDisableRipple: PropTypes.bool,
  buttonVariant: PropTypes.string,
  buttonOnClick: PropTypes.func,
  buttonStartIcon: PropTypes.node,
  buttonEndIcon: PropTypes.node,
};

Popover.defaultProps = {
  isHover: false,
  isVisible: false,
  color: 'primary',
  size: 'medium',
  isButton: true,
  buttonDisableRipple: false,
  buttonVariant: 'contained',
  buttonOnClick: () => null,
  buttonStartIcon: null,
  buttonEndIcon: null,
};

export default Popover;
