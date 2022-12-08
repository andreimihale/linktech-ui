import PropTypes from 'prop-types';
import classNames from 'classnames';
import ClickAwaiyListener from '../ClickAwayListener';

const Backdrop = ({ open, onClick, children, align, className, ...props }) => {
  const backdropClasses = classNames(
    'modal',
    { [`modal-${align}`]: align },
    className
  );

  return (
    <>
      {open && (
        <div className={backdropClasses} {...props}>
          <ClickAwaiyListener onClickAway={onClick}>
            {children}
          </ClickAwaiyListener>
        </div>
      )}
    </>
  );
};

Backdrop.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.string,
};

Backdrop.defaultProps = {
  open: true,
  children: null,
  align: 'column',
};

export default Backdrop;
