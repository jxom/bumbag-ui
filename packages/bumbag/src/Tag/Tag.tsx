import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Flex, FlexProps } from '../Flex';
import { Button, ButtonProps } from '../Button';

import * as styles from './Tag.styles';
import { Palette, Size } from '../types';

export type LocalTagProps = {
  onRemove?: () => any;
  palette?: Palette;
  size?: Size;
};
export type TagProps = BoxProps & LocalTagProps;

const useProps = createHook<TagProps>(
  (props, { themeKey }) => {
    const { children, onRemove, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Tag,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const tagContentClassName = useClassName({
      style: styles.TagContent,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Content',
    });
    const tagCloseClassName = useClassName({
      style: styles.TagClose,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Close',
    });

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          <Flex className={tagContentClassName}>{children}</Flex>
          {onRemove && (
            <Button.Close className={tagCloseClassName} onClick={onRemove} iconProps={{ fontSize: '200' }} />
          )}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Tag', defaultProps: { palette: 'text', size: 'default' } }
);

export const Tag = createComponent<TagProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tag',
    },
    themeKey: 'Tag',
  }
);
