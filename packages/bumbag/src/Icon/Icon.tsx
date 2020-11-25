import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import {
  useClassName,
  createComponent,
  createElement,
  createHook,
  parseIcons,
  useTheme,
  ParsedIcon,
  ParseIconsOpts,
} from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Icon.styles';

export type LocalIconProps = {
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color?: string;
  /** The name of your icon or parsed icon. */
  icon?: string | ParsedIcon;
  /** A label for the icon which can be read by screen readers. This is required if a11yHidden is false. */
  label?: string;
  /** Size of the icon. */
  fontSize?: string;
  type?: ParseIconsOpts['type'];
};
export type IconProps = BoxProps & LocalIconProps;

const useProps = createHook<IconProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Icon,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const { theme } = useTheme();
    // @ts-ignore
    const icon = theme?.Icon?.iconNames?.[props.icon] ?? props.icon;
    const icons = theme?.Icon?.icons ?? {};

    let iconInfo = icons[icon];
    if (props.type) {
      // @ts-ignore
      const parsedIcons = parseIcons([props.icon], { type: props.type });
      iconInfo = Object.entries(parsedIcons)[0][1];
    } else if (typeof props.icon === 'object') {
      iconInfo = props.icon;
    }
    const { viewBoxWidth = 0, viewBoxHeight = 0, paths = [] } = iconInfo || {};

    return {
      role: 'img',
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
      'aria-hidden': !props['aria-label'] && !props.label,
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          {props.label && <title>{props.label}</title>}
          {paths.map((path: string) => (
            <path key={path} d={path} fill="currentColor" fillRule="evenodd" />
          ))}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Icon' }
);

export const Icon = createComponent<IconProps>(
  (props) => {
    const iconProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: iconProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Icon',
    },
    defaultProps: {
      use: 'svg',
    },
    themeKey: 'Icon',
  }
);
