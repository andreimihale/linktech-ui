import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckIcon } from '@heroicons/react/24/outline';

const Checkbox = ({
  checked,
  onClick,
  name,
  allignment,
  children,
  ...props
}) => {
  const checkboxContainer = classNames('checkbox', {
    [`checkbox-${allignment}`]: allignment,
  });

  const checkboxInput = classNames('checkbox__input', {
    'checkbox__input--checked': checked,
  });

  const checkboxIcon = classNames('checkbox__icon', {
    'checkbox__icon--checked': checked,
  });
  return (
    <div className={checkboxContainer} {...props}>
      <input
        type="checkbox"
        name={name}
        value={checked}
        className="opacity-0 absolute h-8 w-8"
        onClick={onClick}
      />
      <div className={checkboxInput}>
        <CheckIcon className={checkboxIcon} />
      </div>
      <label>{children}</label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  allignment: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  checked: false,
  name: 'checkbox',
  allignment: 'row',
  children: 'Checkbox',
};

export default Checkbox;
