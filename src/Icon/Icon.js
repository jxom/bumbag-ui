// @flow
import React, { type Node } from 'react';
import { withTheme } from 'reakit/styled';
import { IconSvgPaths16, IconSvgPaths20 } from '@blueprintjs/icons';
import _get from 'lodash/get';

import _Icon from './styled';
import type { Size } from '../types';

type Props = {
  /** A label for the icon which can be read by screen readers. This is required! */
  a11yLabel: string,
  children: Node,
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color: string,
  className?: string,
  /** The name of your icon from the Blueprint set (https://blueprintjs.com/docs/#icons). */
  icon: string,
  /** Size of the icon. Available values: "small", "medium", "large" */
  size?: Size,
  theme: Object
};

const DEFAULT_VIEW_BOX_SIZE = 16;
const LARGE_VIEW_BOX_SIZE = 20;

export const Icon = ({ a11yLabel, children, icon, size: _size, theme, ...props }: Props) => {
  const size = _get(theme, `fannypack.fontSizes[${_size || ''}]`, 1);
  const svgPaths = size >= LARGE_VIEW_BOX_SIZE ? IconSvgPaths20 : IconSvgPaths16;
  const viewBoxSize = size >= LARGE_VIEW_BOX_SIZE ? LARGE_VIEW_BOX_SIZE : DEFAULT_VIEW_BOX_SIZE;
  const paths = svgPaths[icon];
  return (
    <_Icon use="svg" role="img" size={size} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} {...props}>
      {a11yLabel && <title>{a11yLabel}</title>}
      {paths.map(path => (
        <path key={path} d={path} fillRule="even-odd" />
      ))}
    </_Icon>
  );
};

Icon.defaultProps = {
  a11yLabel: undefined,
  className: undefined,
  color: undefined,
  icon: undefined,
  size: 'default'
};

export default withTheme(Icon);
