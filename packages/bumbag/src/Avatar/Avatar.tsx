import { Box as ReakitBox } from 'reakit';

import { Palette, Omit, Size, Flexible } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box } from '../Box';
import { Image, ImageProps } from '../Image';

import * as styles from './Avatar.styles';

export type LocalAvatarProps = {
  /** Variant of the avatar. */
  variant?: Flexible<'circle', string>;
  /** URL of the avatar image. */
  src?: string;
  /** Size of the avatar. */
  size?: Size | string;
  /** Initials to place on the avatar. */
  initials?: string;
  /** Color of the avatar. */
  palette?: Palette;
};
export type AvatarProps = Omit<ImageProps, 'src'> & LocalAvatarProps;

const useProps = createHook<AvatarProps>(
  (props = {}, { themeKey }) => {
    const imageProps = Image.useProps({ ...props }, { themeKey: 'Avatar' });

    const className = useClassName({
      style: styles.Avatar,
      styleProps: props,
      themeKey,
      prevClassName: imageProps.className,
    });

    let children;
    if (props.initials) {
      children =
        props.initials.split(' ').length === 2 ? props.initials.match(/\b\w/g) : props.initials.substring(0, 2);
    }

    return { ...imageProps, className, children };
  },
  {
    defaultProps: {
      size: 'default',
    },
    themeKey: 'Avatar',
  }
);

export const Avatar = createComponent<AvatarProps>(
  (props) => {
    const imageProps = useProps(props);

    let use = props.use;
    if (props.initials) {
      use = Box;
    }

    return createElement({ component: ReakitBox, use, htmlProps: imageProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Avatar',
    },
    defaultProps: {
      use: 'img',
    },
    themeKey: 'Avatar',
  }
);
