import { render } from '@testing-library/react';
import Popover from './Popover';

describe('components/Utils/Popover', () => {
  it('render Popover', () => {
    const { container } = render(
      <Popover switcherText="switcher text" title="popover title">
        popover content
      </Popover>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('render popover with button and click it', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Popover
        switcherText="switcher text"
        title="popover title"
        buttonOnClick={onClick}
      >
        popover content
      </Popover>
    );
    expect(container.firstChild).toBeInTheDocument();
    const button = container.querySelector('.popover__button');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('render popover with button and hover', () => {
    const { container } = render(
      <Popover switcherText="switcher text" title="popover title" isHover>
        popover content
      </Popover>
    );
    expect(container.firstChild).toBeInTheDocument();
    const button = container.querySelector('.popover__button');
    button.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(container.querySelector('.popover__content')).toHaveClass(
      'popover__content--visible'
    );
    button.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    expect(container.querySelector('.popover__content')).not.toHaveClass(
      'popover__content--visible'
    );
  });

  it('render popover with default button onClick method', () => {
    const { container } = render(
      <Popover switcherText="switcher text" title="popover title">
        popover content
      </Popover>
    );
    expect(container.firstChild).toBeInTheDocument();
    const button = container.querySelector('.popover__button');
    button.click();
  });

  it('render popover with text and click it', () => {
    const { container } = render(
      <Popover
        switcherText="switcher text"
        title="popover title"
        isButton={false}
      >
        popover content
      </Popover>
    );

    const label = container.querySelector('.popover__label');
    label.click();
    expect(container.querySelector('.popover__content')).toHaveClass(
      'popover__content--visible'
    );
  });

  it('render popover with text and hover', () => {
    const { container } = render(
      <Popover
        switcherText="switcher text"
        title="popover title"
        isButton={false}
        isHover
      >
        popover content
      </Popover>
    );

    const label = container.querySelector('.popover__label');
    label.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(container.querySelector('.popover__content')).toHaveClass(
      'popover__content--visible'
    );
    label.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    expect(container.querySelector('.popover__content')).not.toHaveClass(
      'popover__content--visible'
    );
  });
});
