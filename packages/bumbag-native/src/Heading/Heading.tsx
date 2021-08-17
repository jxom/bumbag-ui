import { TextProps as RNTextProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Heading.styles';

export type LocalHeadingProps = {};
export type HeadingProps = BoxProps & RNTextProps & LocalHeadingProps;

const useProps = createHook<HeadingProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { defaultProps: { font: 'heading' }, themeKey: 'native.Heading' }
);

export const Heading = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: { ...htmlProps, font: props.font || props.fontFamily },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading',
    },
    themeKey: 'native.Heading',
  }
);

export const H1 = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: {
        ...htmlProps,
        font: props.font || props.fontFamily,
        type: 'H1',
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading.H1',
    },
    themeKey: 'native.Heading.H1',
  }
);

export const H2 = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: {
        ...htmlProps,
        font: props.font || props.fontFamily,
        type: 'H2',
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading.H2',
    },
    themeKey: 'native.Heading.H2',
  }
);

export const H3 = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: {
        ...htmlProps,
        font: props.font || props.fontFamily,
        type: 'H3',
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading.H3',
    },
    themeKey: 'native.Heading.H3',
  }
);

export const H4 = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: {
        ...htmlProps,
        font: props.font || props.fontFamily,
        type: 'H4',
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading.H4',
    },
    themeKey: 'native.Heading.H4',
  }
);

export const H5 = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: {
        ...htmlProps,
        font: props.font || props.fontFamily,
        type: 'H5',
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading.H5',
    },
    themeKey: 'native.Heading.H5',
  }
);

export const H6 = createComponent<HeadingProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledHeading,
      htmlProps: {
        ...htmlProps,
        type: 'H6',
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Heading.H6',
    },
    themeKey: 'native.Heading.H6',
  }
);
