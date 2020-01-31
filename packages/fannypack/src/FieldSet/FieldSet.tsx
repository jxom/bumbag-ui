import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Set, SetProps } from '../Set';

import * as styles from './styles';

export type LocalFieldSetProps = {
  isHorizontal?: boolean;
  spacing?: string;
};
export type FieldSetProps = Omit<SetProps, 'isVertical'> & LocalFieldSetProps;

const useProps = createHook<FieldSetProps>(
  (props, themeKey) => {
    const { isHorizontal, ...restProps } = props;
    const setProps = Set.useProps({ ...restProps, isVertical: !isHorizontal });

    const className = useClassName({
      style: styles.FieldSet,
      styleProps: props,
      themeKey,
      prevClassName: setProps.className
    });

    return { ...setProps, className };
  },
  { defaultProps: { spacing: 'major-3' }, themeKey: 'FieldSet' }
);

export const FieldSet = createComponent<FieldSetProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'FieldSet'
  }
);
