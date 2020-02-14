import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';

import * as styles from './styles';
import { Palette, Size } from '../types';

export type LocalTagProps = {
  kind?: string;
  onRemove?: () => any;
  palette?: Palette;
  size?: Size;
};
export type TagProps = BoxProps & LocalTagProps;

const useProps = createHook<TagProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { children, onRemove, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Tag,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const tagContentClassName = useClassName({
      style: styles.TagContent,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Content',
      prevClassName: boxProps.className
    });
    const tagCloseClassName = useClassName({
      style: styles.TagClose,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Close',
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          <Box className={tagContentClassName}>{children}</Box>
          {onRemove && <Button.Close className={tagCloseClassName} onClick={onRemove} />}
        </React.Fragment>
      )
    };
  },
  { themeKey: 'Tag', defaultProps: { palette: 'text', size: 'default' } }
);

export const Tag = createComponent<TagProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Tag'
  }
);
