import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';
import _get from 'lodash/get';

import { BoxThemeConfig, CSSProperties } from '../types';
import * as utils from '../utils';

import * as styles from './styles';

export type LocalBoxProps = {
  use?: string | React.ComponentType<any>;
  className?: string;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  /* Component-level theme overrides [Read more](TODO) */
  overrides?: BoxThemeConfig;
  showBreakpoint?: string;
  hiddenBreakpoint?: string;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

export function useProps(props: BoxProps = {}) {
  // Convert CSS props to an object.
  // Example input:
  // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }
  const style = utils.useStyle(props);

  // Append the styles from above as a className on the DOM element (with precedence).
  let className = utils.useClassName({ style: styles.style, styleProps: { style }, prevClassName: props.className });

  // Append the Box styles as a className on the DOM element.
  className = utils.useClassName({ style: styles.Box, styleProps: props, prevClassName: className });

  // Pick out and invalid HTML props & omit the CSS props.
  const htmlProps = utils.omitCSSProps(utils.pickHTMLProps({ ...props, className }));

  return { ...htmlProps };
}
Box.useProps = useProps;

export function Box(props: BoxProps) {
  const { children, use, ...restProps } = props;
  const boxProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={boxProps}>
      {children}
    </utils.Element>
  );
}
