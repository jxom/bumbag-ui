import * as React from 'react';
import { BoxProps as ReakitBoxProps, useBox as useReakitBox } from 'reakit/Box/Box';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';

import { BoxThemeConfig, CSSProperties } from '../types';
import * as utils from '../utils';

import { StyledBox } from './styled';

export type LocalBoxProps = {
  children?: React.ReactNode | ((props: ReakitBoxProps) => React.ReactNode);
  overrides?: BoxThemeConfig;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;
export type BoxOptions = {};

export const useBox = createHook<BoxOptions, BoxProps>({
  name: 'Box',
  compose: useReakitBox,

  useProps(_, props) {
    const { overrides } = props;
    const style = utils.useStyle(props);
    const htmlProps = utils.pickHTMLProps(props);
    return {
      overrides,
      style,
      ...htmlProps
    };
  }
});

export const Box: React.FunctionComponent<BoxProps> = createComponent({
  as: StyledBox,
  useHook: useBox
});

export function BoxTypes(_: BoxProps) {
  return null;
}
