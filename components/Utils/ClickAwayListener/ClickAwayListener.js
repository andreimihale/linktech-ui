import { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, onClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick, ref]);
}

const ClickAwayListener = ({ onClickAway, children, ...props }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClickAway);

  return (
    <div ref={wrapperRef} {...props}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
