// @flow
import React, { type Node } from 'react';
import { withTheme } from 'reakit/styled';
import * as icons from '@fortawesome/free-solid-svg-icons';
import _get from 'lodash/get';
import _upperFirst from 'lodash/upperFirst';
import _camelCase from 'lodash/camelCase';

import _Icon from './styled';
import type { Size } from '../types';

type Props = {
  /** A label for the icon which can be read by screen readers. This is required! */
  a11yLabel: string,
  children: Node,
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color: string,
  className?: string,
  /** The name of your icon from the free Font Awesome Icon Set (https://fontawesome.com/icons?d=gallery&m=free). */
  icon: string,
  /** Size of the icon. Available values: "small", "medium", "large" */
  size?: Size,
  theme: Object
};

export const Icon = ({ a11yLabel, children, icon, size: _size, theme, ...props }: Props) => {
  const size = _get(theme, `fannypack.fontSizes[${_size || ''}]`, 1);
  const newIcon = _get(theme, `fannypack.Icon.iconNames[${icon}]`) || icon;
  const iconInfo = icons[`fa${_upperFirst(_camelCase(newIcon))}`];
  const [viewBoxWidth, viewBoxHeight, , , iconPath] = iconInfo.icon;
  return (
    <_Icon use="svg" role="img" size={size} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} {...props}>
      {a11yLabel && <title>{a11yLabel}</title>}
      <path d={iconPath} fill="currentColor" />
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
