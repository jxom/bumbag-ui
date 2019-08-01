import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';
import _get from 'lodash/get';

import { ThemeContext, theme, classNames, cssClass } from '../styled';
import { BoxThemeConfig, CSSProperties } from '../types';
import * as utils from '../utils';

export type LocalBoxProps = {
  use?: string | React.ComponentType<any>;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  /* Component-level theme overrides [Read more](TODO) */
  overrides?: BoxThemeConfig;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

export function useBoxProps(props: BoxProps = {}) {
  // Convert CSS props to an object.
  // Example input:
  // restProps = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }
  const style = utils.useStyle(props);

  // Append the <Box> styles as a className on the DOM element.
  const theme = React.useContext(ThemeContext);
  const className = classNames(boxCSS({ style, theme, ...props }), props.className);

  // Pick out and invalid HTML props & omit the CSS props.
  const htmlProps = utils.omitCSSProps(utils.pickHTMLProps({ ...props, className }));

  return { ...htmlProps, as: props.use };
}

export function Box(props: BoxProps) {
  const { children, ...restProps } = props;
  const boxProps = useBoxProps(restProps);
  if (utils.isFunction(children)) {
    return <React.Fragment>{children(boxProps)}</React.Fragment>;
  }
  return <ReakitBox {...boxProps}>{children}</ReakitBox>;
}

export const boxCSS = (props) => cssClass`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & {
    ${theme('Box.base')(props)};
  }

  && {
    ${props.style};
  }
`;
