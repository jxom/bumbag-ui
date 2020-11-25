import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Stack, StackProps } from '../Stack';

import * as styles from './FieldStack.styles';

export type LocalFieldStackProps = {};
export type FieldStackProps = StackProps & LocalFieldStackProps;

const useProps = createHook<FieldStackProps>(
  (props, { themeKey }) => {
    const stackProps = Stack.useProps(props);

    const className = useClassName({
      style: styles.FieldStack,
      styleProps: props,
      themeKey,
      prevClassName: stackProps.className,
    });

    return { ...stackProps, className };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'major-2' }, themeKey: 'FieldStack' }
);

export const FieldStack = createComponent<FieldStackProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'FieldStack',
    },
    themeKey: 'FieldStack',
  }
);
