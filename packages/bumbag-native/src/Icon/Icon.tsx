import * as React from 'react';
import {
  createComponent,
  createElement,
  createHook,
  useIcon,
  ParsedIcon,
  ParseIconsOpts,
  useTheme,
} from 'bumbag/utils';
import { Icon as WebIcon } from 'bumbag/Icon';
import { Path } from 'react-native-svg';

import { Box, BoxProps } from '../Box';
import { fontSize, palette } from '../utils';
import * as styles from './Icon.styles';

export type LocalIconProps = {
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color?: string;
  /** The name of your icon or parsed icon. */
  icon?: string | ParsedIcon;
  /** A label for the icon which can be read by screen readers. This is required if a11yHidden is false. */
  label?: string;
  /** Size of the icon. */
  size?: string;
  type?: ParseIconsOpts['type'];
};
export type IconProps = BoxProps & LocalIconProps;

const useProps = createHook<IconProps>(
  (props, { themeKey }) => {
    const { color, icon, label, size, type } = props;

    const { theme } = useTheme();

    const boxProps = Box.useProps(props);

    const { viewBoxWidth, viewBoxHeight, paths } = useIcon({ icon, type });

    return {
      ...boxProps,
      width: fontSize(size)({ theme }),
      height: fontSize(size)({ theme }),
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
      children: (
        <React.Fragment>
          {label && <title>{label}</title>}
          {paths.map((path: string) => (
            <Path key={path} d={path} fill={palette(color)({ theme })} fillRule="evenodd" />
          ))}
        </React.Fragment>
      ),
    };
  },
  { defaultProps: { color: 'text', size: '200' }, themeKey: 'native.Icon' }
);

export const Icon = createComponent<IconProps>(
  (props) => {
    const iconProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledIcon,
      htmlProps: iconProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Icon',
    },
    defaultProps: {
      color: 'text',
      size: '200',
    },
    themeKey: 'native.Icon',
  }
);
