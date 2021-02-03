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
import { useColorMode } from 'bumbag/ColorMode/ColorModeContext';
import capitalize from 'lodash/capitalize';
import * as Svg from 'react-native-svg';

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

function Tree({ fill, tree }) {
  if (tree.length > 0) {
    return tree.map((node) => {
      const Component = Svg[capitalize(node.name)] || Svg.Path;
      let newProps = {};
      if (node.attributes?.fill && node.attributes?.fill !== 'white' && node.attributes?.fill !== 'none') {
        newProps = {
          fill,
          fillRule: 'evenodd',
        };
      }
      if (node.attributes?.stroke && node.attributes?.stroke !== 'white' && node.attributes?.stroke !== 'none') {
        newProps = {
          stroke: fill,
          fillRule: 'evenodd',
        };
      }
      return (
        <Component key={node.name} {...node.attributes} {...newProps}>
          <Tree fill={fill} tree={node.children} />
        </Component>
      );
    });
  }
  return null;
}

const useProps = createHook<IconProps>(
  (props) => {
    const { color, icon, label, size, type } = props;

    const { theme } = useTheme();
    const { colorMode } = useColorMode();

    const boxProps = Box.useProps(props);

    const { viewBoxWidth, viewBoxHeight, paths, tree, props: svgProps } = useIcon({ icon, type });

    return {
      ...boxProps,
      ...svgProps,
      width: fontSize(size)({ theme }),
      height: fontSize(size)({ theme }),
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
      children: (
        <React.Fragment>
          {label && <title>{label}</title>}
          {paths.map((path: string) => (
            <Svg.Path key={path} d={path} fill={palette(color)({ colorMode, theme })} fillRule="evenodd" />
          ))}
          {tree.length > 0 && <Tree fill={palette(color)({ colorMode, theme })} tree={tree} />}
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
    themeKey: 'native.Icon',
  }
);
