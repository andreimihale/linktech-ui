import classNames from 'classnames';
import ClickAwaiyListener from '../ClickAwaiyListener';

const Backdrop = ({ open, onClick, children, className, ...props }) => {
  const backdropClasses = classNames('modal', className);

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

export default Backdrop;
