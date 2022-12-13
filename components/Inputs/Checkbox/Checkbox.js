import PropTypes from 'prop-types';
import classNames from 'classnames';

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

  const checkboxInput = classNames('checkbox__input');

  const checkboxIcon = classNames('checkbox__icon');
  return (
    <div className={checkboxContainer} {...props}>
      <input
        type="checkbox"
        name={name}
        value={checked}
        onClick={onClick}
        className={checkboxInput}
      />

      <label className={checkboxIcon}>{children}</label>
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
