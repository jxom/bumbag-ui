import { Box as ReakitBox } from 'reakit';

import { Omit, Size } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box } from '../Box';
import { Image, ImageProps } from '../Image';

import * as styles from './styles';

export type LocalAvatarProps = {
  variant?: 'circle';
  src?: string;
  size?: Size | string;
  initials?: string;
  palette?: string;
};
export type AvatarProps = Omit<ImageProps, 'src'> & LocalAvatarProps;

const useProps = createHook<AvatarProps>(
  (props = {}, { themeKey, themeKeyOverride }) => {
    const imageProps = Image.useProps({ ...props }, { themeKey: 'Avatar' });

    const className = useClassName({
      style: styles.Avatar,
      styleProps: props,
      themeKey,
      themeKeyOverride,
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
    },
    defaultProps: {
      use: 'img',
    },
    themeKey: 'Avatar',
  }
);
