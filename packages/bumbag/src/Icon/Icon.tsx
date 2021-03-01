import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import {
  useClassName,
  createComponent,
  createElement,
  createHook,
  useIcon,
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

function Tree({ fill, tree }) {
  if (tree.length > 0) {
    return tree.map((node, index) => {
      const Component = node.name;
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
        // eslint-disable-next-line
        <Component key={`${node.name}.${index}`} {...node.attributes} {...newProps}>
          <Tree fill={fill} tree={node.children} />
        </Component>
      );
    });
  }
  return null;
}

const useProps = createHook<IconProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Icon,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const { viewBoxWidth, viewBoxHeight, props: svgProps, paths, tree } = useIcon({
      icon: props.icon,
      type: props.type,
    });

    return {
      ...svgProps,
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
          <Tree fill="currentColor" tree={tree} />
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
