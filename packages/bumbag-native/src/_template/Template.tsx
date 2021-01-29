import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Template.styles';

export type LocalTemplateProps = {};
export type TemplateProps = BoxProps & RNViewProps & LocalTemplateProps;

const useProps = createHook<TemplateProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { defaultProps: { fontSize: '200' }, themeKey: 'native.Template' }
);

export const Template = createComponent<TemplateProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledTemplate,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Template',
    },
    themeKey: 'native.Template',
  }
);
