import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalFlexProps = {};
export type FlexProps = BoxProps & LocalFlexProps;

function useProps(props: Partial<FlexProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Flex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Flex = utils.createComponent<FlexProps>(
  props => {
    const { children, use, ...restProps } = props;
    const flexProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: flexProps });
  },
  {
    useProps
  }
);
