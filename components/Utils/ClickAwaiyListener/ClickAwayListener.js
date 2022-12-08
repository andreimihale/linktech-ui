import { useRef, useEffect } from 'react';

const ClickAwayListener = ({ onClickAway, children, ...props }) => {
  const rootRef = useRef();

  useEffect(() => {
    const handleClickAway = (event) => {
      const eventTarget = event.target;

      const isClickInside = rootRef?.current?.contains(eventTarget);

      if (!isClickInside) onClickAway();
    };

    window.addEventListener('click', handleClickAway);

    return () => {
      window.removeEventListener('click', handleClickAway);
    };
  }, [onClickAway, rootRef]);

  return (
    <div ref={rootRef} {...props}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
