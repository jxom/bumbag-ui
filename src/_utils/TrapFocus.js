// @flow
import React from 'react';
import _get from 'lodash/get';
import createFocusTrap from 'focus-trap';

type Props = {
  children: Function,
  isActive?: boolean,
  usesPortal?: boolean
};
type State = {
  originalAriaHiddenValues: Array<?string>
};

export default class TrapFocus extends React.Component<Props, State> {
  static defaultProps = {
    isActive: false,
    usesPortal: false
  };

  state = {
    originalAriaHiddenValues: []
  };

  fallbackFocus = React.createRef();
  initialFocus = React.createRef();
  wrapper = React.createRef();
  trap = {};

  componentDidMount = () => {
    const { isActive, usesPortal } = this.props;

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
      Array.from(_get(document, 'body.children', [])).forEach(child => {
        if (child.contains(this.wrapper.current)) return;
        this.setState(prevState => ({
          originalAriaHiddenValues: [...(prevState.originalAriaHiddenValues || []), child.getAttribute('aria-hidden')]
        }));
      });
    }
  };

  componentDidUpdate = (prevProps: Props) => {
    const { isActive, usesPortal } = this.props;
    const { originalAriaHiddenValues } = this.state;
    if (isActive !== prevProps.isActive) {
      if (isActive) {
        this.trap.activate();
      } else {
        this.trap.deactivate();
      }

      if (usesPortal) {
        Array.from(_get(document, 'body.children', [])).forEach((child, i) => {
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
