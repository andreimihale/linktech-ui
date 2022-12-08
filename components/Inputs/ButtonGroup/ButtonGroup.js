import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';

const ButtonGroup = ({
  color,
  variant,
  buttonAlign,
  children,
  className,
  ...props
}) => {
  const buttonsClasses = classNames(
    'btn-group',
    { [`btn-group-${buttonAlign}`]: buttonAlign },
    { [`btn-group-${variant}`]: variant },
    { [`btn-group-${color}`]: color },
    className
  );
  return (
    <div className={buttonsClasses} {...props}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttonAlign: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
  ]),
};

ButtonGroup.defaultProps = {
  buttonAlign: 'row',
  variant: 'contained',
  color: 'primary',
  children: (
    <>
      <Button variant="contained" color="primary" />
      <Button variant="contained" color="primary" />
      <Button variant="contained" color="primary" />
    </>
  ),
};

export default ButtonGroup;
