import * as React from 'react';
import * as PropTypes from 'prop-types';

import { buttonPropTypes, buttonDefaultProps, LocalButtonProps, ButtonProps } from '../Button/Button';
import { Omit } from '../types';
import { MenuButton as _MenuButton } from './styled';
import { withMenuContext, MenuContextState } from './MenuContext';

export type LocalMenuButtonProps = LocalButtonProps & {
  context?: MenuContextState;
  isVisible?: boolean;
  onClick?(e: React.MouseEvent<any>): void;
};
export type MenuButtonProps = Omit<ButtonProps, 'use'> & LocalMenuButtonProps;

const KEYS = {
  UP: 38,
  DOWN: 40,
  TAB: 9,
  SPACE: 32
};

export class MenuButton extends React.Component<LocalMenuButtonProps> {
  static propTypes = {
    ...buttonPropTypes,
    onClick: PropTypes.func
  };
  static defaultProps = {
    ...buttonDefaultProps
  };

  handleKeyDown = (e: React.KeyboardEvent<any>) => {
    const { context, isVisible } = this.props;
    if (!isVisible) {
      if (e.keyCode === KEYS.DOWN || e.keyCode === KEYS.TAB || e.keyCode === KEYS.SPACE || e.keyCode === KEYS.UP) {
        e.preventDefault();
        context && context.handleMenuOpenViaKeyboard({ startAt: e.keyCode === KEYS.UP ? 'last' : 'first' });
      }
    }
  };

  render = () => {
    const { context, ...props } = this.props;
    return (
      <_MenuButton
        aria-haspopup="menu"
        aria-expanded={props.isVisible}
        onKeyDown={this.handleKeyDown}
        {...context}
        {...props}
        type="button"
      />
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<MenuButtonProps> = withMenuContext(MenuButton);
export default C;
