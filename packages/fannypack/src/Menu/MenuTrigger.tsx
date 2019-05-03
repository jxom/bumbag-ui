import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { Box } from '../primitives';
import { withMenuContext, MenuContextState } from './MenuContext';

export type LocalMenuTriggerProps = {
  context?: MenuContextState;
  isVisible?: boolean;
  onClick?(e: React.MouseEvent<any>): void;
};
export type MenuTriggerProps = ReakitBoxProps & LocalMenuTriggerProps;

const KEYS = {
  UP: 38,
  DOWN: 40,
  TAB: 9,
  SPACE: 32
};

export const menuTriggerPropTypes = {
  context: PropTypes.object,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func
};
export const menuTriggerDefaultProps = {
  context: undefined,
  isVisible: false,
  onClick: undefined
};

export class MenuTrigger extends React.Component<LocalMenuTriggerProps> {
  static propTypes = menuTriggerPropTypes;

  static defaultProps = menuTriggerDefaultProps;

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
      <Box
        aria-haspopup="menu"
        aria-expanded={context && context.isVisible}
        onKeyDown={this.handleKeyDown}
        {...context}
        {...props}
        type="button"
      />
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<MenuTriggerProps> = withMenuContext(MenuTrigger);
export default C;
