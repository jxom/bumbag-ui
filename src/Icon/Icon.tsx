import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
import * as icons from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import _get from 'lodash/get';
// @ts-ignore
import _upperFirst from 'lodash/upperFirst';
// @ts-ignore
import _camelCase from 'lodash/camelCase';

import { withTheme } from '../styled';
import { Omit, Size, sizePropType } from '../types';
import _Icon from './styled';

export interface Props {
  children?: React.ReactNode;
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color?: string;
  className?: string;
  /** The name of your icon from the free Font Awesome Icon Set (https://fontawesome.com/icons?d=gallery&m=free). */
  icon: string;
  /** Size of the icon. Available values: "small", "medium", "large" */
  size?: Size;
  theme?: Object;
}
export interface PropsWithA11yHidden extends Props {
  /** Indicates that this element should be skipped by assistive technologies. */
  a11yHidden: boolean;
}
export interface PropsWithA11yLabel extends Props {
  /** A label for the icon which can be read by screen readers. This is required if a11yHidden is false. */
  a11yLabel: string;
}
export type LocalIconProps = PropsWithA11yHidden | PropsWithA11yLabel;
export type IconProps = Omit<ReakitBoxProps, 'size'> & LocalIconProps;

export const Icon: React.FunctionComponent<LocalIconProps> = ({
  // @ts-ignore
  a11yHidden,
  // @ts-ignore
  a11yLabel,
  children,
  icon,
  size: _size,
  theme,
  ...props
}) => {
  const size = _get(theme, `fannypack.fontSizes[${_size || ''}]`, 1);
  const newIcon = _get(theme, `fannypack.Icon.iconNames[${icon}]`) || icon;
  // @ts-ignore
  const iconInfo = icons[`fa${_upperFirst(_camelCase(newIcon))}`];
  const [viewBoxWidth, viewBoxHeight, , , iconPath] = iconInfo.icon;
  return (
    // @ts-ignore
    <_Icon
      use="svg"
      ariaHidden={a11yHidden}
      role="img"
      size={size}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      {...props}
    >
      {a11yLabel && <title>{a11yLabel}</title>}
      <path d={iconPath} fill="currentColor" />
    </_Icon>
  );
};

Icon.propTypes = {
  a11yHidden: PropTypes.bool,
  a11yLabel: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: sizePropType,
  theme: PropTypes.object // eslint-disable-line
};
Icon.defaultProps = {
  a11yHidden: false,
  a11yLabel: undefined,
  children: null,
  className: undefined,
  color: undefined,
  icon: undefined,
  size: 'default'
};

// @ts-ignore
const C: React.FunctionComponent<IconProps> = withTheme(Icon);
export default C;
