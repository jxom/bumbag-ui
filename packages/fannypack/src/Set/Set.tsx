import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalSetProps = {
  isFilled?: boolean;
  isVertical?: boolean;
  spacing?: string;
};
export type SetProps = BoxProps & LocalSetProps;

function useProps(props: Partial<SetProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Set,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Set = createComponent<SetProps>(
  props => {
    const setProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: setProps });
  },
  {
    attach: {
      defaultProps: {
        isFilled: false,
        isVertical: false,
        spacing: 'minor-2'
      },
      useProps
    },
    themeKey: 'Set'
  }
);
