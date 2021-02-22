import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box } from '../Box';
import { TextProps } from '../Text/Text';
import * as styles from '../Text/Text.styles';

export type LocalAnimatedTextProps = {};
export type AnimatedTextProps = TextProps;

const useProps = createHook<AnimatedTextProps>(
  (props) => {
    const boxProps = Box.useProps({ ...props, animated: true });
    return { ...boxProps };
  },
  { defaultProps: { fontSize: '200' }, themeKey: 'native.Text' }
);

export const AnimatedText = createComponent<AnimatedTextProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledAnimatedText,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.AnimatedText',
    },
    themeKey: 'native.Text',
  }
);
