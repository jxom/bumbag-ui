import * as React from 'react';
// @ts-ignore
import _get from 'lodash/get';
// @ts-ignore
import createFocusTrap from 'focus-trap';

export type TrapFocusProps = {
  children: (
    {
      fallbackFocusRef,
      initialFocusRef
    }: { fallbackFocusRef: React.RefObject<HTMLElement>; initialFocusRef: React.RefObject<HTMLElement> }
  ) => React.ReactNode;
  isActive?: boolean;
  usesPortal?: boolean;
};
export type TrapFocusState = {
  originalAriaHiddenValues: Array<string | void>;
};

const noop = () => {};

export default class TrapFocus extends React.Component<TrapFocusProps, TrapFocusState> {
  static defaultProps = {
    isActive: false,
    usesPortal: false
  };

  state = {
    originalAriaHiddenValues: []
  };

  fallbackFocus = React.createRef<HTMLElement>();
  initialFocus = React.createRef<HTMLElement>();
  wrapper = React.createRef<HTMLDivElement>();
  trap: { activate(): void; deactivate(): void } = {
    activate: noop,
    deactivate: noop
  };

  componentDidMount = () => {
    const { isActive, usesPortal } = this.props;

    // @ts-ignore
    this.trap = createFocusTrap(this.wrapper.current, {
      initialFocus: this.initialFocus.current,
      fallbackFocus: this.fallbackFocus.current,
      escapeDeactivates: false,
      clickOutsideDeactivates: false
    });

    if (isActive) {
      this.trap.activate();
    }

    if (usesPortal) {
      Array.from(_get(document, 'body.children', [])).forEach((child: any) => {
        if (child.contains(this.wrapper.current)) return;
        this.setState(prevState => ({
          originalAriaHiddenValues: [...(prevState.originalAriaHiddenValues || []), child.getAttribute('aria-hidden')]
        }));
      });
    }
  };

  componentDidUpdate = (prevProps: TrapFocusProps) => {
    const { isActive, usesPortal } = this.props;
    const { originalAriaHiddenValues } = this.state;
    if (isActive !== prevProps.isActive) {
      if (isActive) {
        this.trap.activate();
      } else {
        this.trap.deactivate();
      }

      if (usesPortal) {
        Array.from(_get(document, 'body.children', [])).forEach((child: any, i: number) => {
          if (child.contains(this.wrapper.current)) {
            return;
          }
          if (isActive) {
            child.setAttribute('aria-hidden', 'true');
            return;
          }
          if (originalAriaHiddenValues[i]) {
            child.setAttribute('aria-hidden', originalAriaHiddenValues[i]);
            return;
          }
          child.removeAttribute('aria-hidden');
        });
      }
    }
  };

  componentWillUnmount = () => {
    this.trap.deactivate();
  };

  render = () => {
    const { children } = this.props;
    return (
      <div ref={this.wrapper}>
        {children({ fallbackFocusRef: this.fallbackFocus, initialFocusRef: this.initialFocus })}
      </div>
    );
  };
}
