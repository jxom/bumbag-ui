import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineProps = {};
export type InlineProps = BoxProps & LocalInlineProps;

function useProps(props: Partial<InlineProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Inline,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Inline = utils.createComponent<InlineProps>(
  props => {
    const { children, use, ...restProps } = props;
    const inlineProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: inlineProps });
  },
  {
    useProps
  }
);
