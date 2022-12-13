import { useId } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Radio = ({
  value,
  name,
  checked,
  disabled,
  children,
  className,
  alignItems,
  ...props
}) => {
  const id = useId();

  const radioClasses = classNames(
    'radio',
    {
      [`radio-align-${alignItems}`]: alignItems,
    },
    className
  );

  const inputClasses = classNames('radio-input', {
    'radio-input-disabled': disabled,
  });

  const labelClasses = classNames('radio-label', {
    'radio-label-disabled': disabled,
  });

  return (
    <div className={radioClasses} {...props}>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        disabled={disabled}
        checked={checked}
        className={inputClasses}
      />
      <label htmlFor={id} className={labelClasses}>
        {children}
      </label>
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  alignItems: PropTypes.oneOf([
    'row',
    'row-start',
    'row-reverse',
    'row-reverse-start',
    'column',
    'column-start',
    'column-reverse',
    'column-reverse-start',
  ]),
};

Radio.defaultProps = {
  alignItems: 'row',
  children: 'Radio Button Label',
};

export default Radio;
