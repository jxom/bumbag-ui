import * as React from 'react';
import _get from 'lodash/get';
import _merge from 'lodash/merge';

import { ThemeContext } from '../styled';

export function createComponent<P>(
  Component: React.FunctionComponent<P>,
  config?: {
    assign?: {
      useProps: (props?: Partial<P>, refs?: Array<any>) => any;
      defaultProps?: Partial<P>;
    };
    themeKey?: string;
  }
) {
  const ForwardedComponent = React.forwardRef((props: P, ref) => {
    const theme = React.useContext(ThemeContext);
    const defaultProps = _get(theme, `${config.themeKey}.defaultProps`, {});
    const newProps = _merge({ ...props }, defaultProps);
    return React.createElement(Component, { ...newProps, elementRef: ref }, _get(props, 'children'));
  });
  return Object.assign({}, ForwardedComponent, config.assign);
}
