import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import propTypeUtils from 'airbnb-prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';
import parseIcons, { ParsedIcon, Opts as ParseIconOpts } from '../parseIcons';
import { Omit, Size, sizePropType } from '../types';
import _Icon from './styled';

export type Props = {
  children?: React.ReactNode;
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color?: string;
  className?: string;
  /** The name of your icon from the free Font Awesome Icon Set (https://fontawesome.com/icons?d=gallery&m=free). */
  icon: string | ParsedIcon;
  /** Size of the icon. */
  size?: string;
  theme?: Object;
  type?: ParseIconOpts['type'];
};
export type PropsWithA11yHidden = Props & {
  /** Indicates that this element should be skipped by assistive technologies. */
  a11yHidden: boolean;
};
export type PropsWithA11yLabel = Props & {
  /** A label for the icon which can be read by screen readers. This is required if a11yHidden is false. */
  a11yLabel: string;
};
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
  type,
  ...props
}) => {
  const size = _get(theme, `fannypack.fontSizes[${_size || ''}]`, 1);
  const newIcon = _get(theme, `fannypack.Icon.iconNames[${icon}]`) || icon;
  const icons = _get(theme, `fannypack.Icon.icons`, {});
  // @ts-ignore
  let iconInfo = icons[newIcon];
  if (type) {
    // @ts-ignore
    const parsedIcons = parseIcons([icon], { type });
    iconInfo = Object.entries(parsedIcons)[0][1];
  } else if (typeof icon === 'object') {
    iconInfo = icon;
  }
  const { viewBoxWidth, viewBoxHeight, paths } = iconInfo;
  return (
    // @ts-ignore
    <_Icon
      use="svg"
      aria-hidden={a11yHidden}
      role="img"
      size={size}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      {...props}
    >
      {a11yLabel && <title>{a11yLabel}</title>}
      {paths.map((path: string) => (
        <path key={path} d={path} fill="currentColor" fillRule="evenodd" />
      ))}
    </_Icon>
  );
};

export const iconPropTypes = {
  a11yHidden: propTypeUtils.mutuallyExclusiveProps(PropTypes.bool, 'a11yHidden', 'a11yLabel'), // eslint-disable-line
  a11yLabel: propTypeUtils.mutuallyExclusiveProps(PropTypes.string, 'a11yHidden', 'a11yLabel'), // eslint-disable-line
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      viewBoxHeight: PropTypes.number,
      viewBoxWidth: PropTypes.number,
      paths: PropTypes.arrayOf(PropTypes.string)
    })
  ]) as PropTypes.Validator<LocalIconProps['icon']>,
  size: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
  type: PropTypes.oneOf(['font-awesome', 'font-awesome-standalone']) as PropTypes.Validator<LocalIconProps['type']>
};

Icon.propTypes = iconPropTypes;

Icon.defaultProps = {
  children: null,
  className: undefined,
  color: undefined,
  icon: undefined,
  size: 'default',
  type: undefined
};

// @ts-ignore
const C: React.FunctionComponent<IconProps> = withTheme(Icon);
export default C;
