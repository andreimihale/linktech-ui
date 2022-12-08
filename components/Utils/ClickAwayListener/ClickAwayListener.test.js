import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ClickAwayListener from './ClickAwayListener';

describe('components/Utils/ClickAwayListener', () => {
  it('render ClickAwayListener', () => {
    const onClickAway = jest.fn();
    const { container } = render(
      <ClickAwayListener onClickAway={onClickAway} />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should call onClickAway when click outside', () => {
    const onClickAway = jest.fn();
    const { container } = render(
      <>
        <div></div>
        <ClickAwayListener onClickAway={onClickAway} />
      </>
    );
    fireEvent.mouseDown(container.firstChild);
    expect(onClickAway).toHaveBeenCalled();
  });

  it('should not call onClickAway when click inside', () => {
    const onClickAway = jest.fn();
    const { container } = render(
      <ClickAwayListener onClickAway={onClickAway}>
        <div></div>
      </ClickAwayListener>
    );
    fireEvent.mouseDown(container.firstChild);
    expect(onClickAway).not.toHaveBeenCalled();
  });

  it('should call when useRef is null', () => {
    const onClickAway = jest.fn();

    const { container } = render(
      <ClickAwayListener onClickAway={onClickAway}>
        <div></div>
      </ClickAwayListener>
    );

    fireEvent.mouseDown(container.firstChild);
  });
});
