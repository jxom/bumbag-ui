import { Box as ReakitBox } from 'reakit';

import { CodeThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalCodeProps = {
  isBlock?: boolean;
  palette?: string;
  overrides?: CodeThemeConfig;
};
export type CodeProps = BoxProps & LocalCodeProps;

function useProps(props: Partial<CodeProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Code,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Code = createComponent<CodeProps>(
  props => {
    const { children, ...restProps } = props;

    let use = restProps.use;
    if (!use) {
      use = restProps.isBlock ? 'pre' : 'code';
    }

    const codeProps = useProps(restProps);

    return createElement({ children, component: ReakitBox, use, htmlProps: codeProps });
  },
  {
    defaultProps: {
      palette: 'default'
    },
    useProps
  }
);
