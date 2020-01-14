import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalFieldWrapperProps = {
  a11yId?: string;
  children:
    | (({ elementProps }: { elementProps: FieldElementProps }) => React.ReactNode)
    | React.ReactElement<any>
    | string;
  className?: string;
  description?: string | React.ReactElement<any>;
  hint?: string | React.ReactElement<any>;
  isOptional?: boolean;
  isRequired?: boolean;
  label?: string | React.ReactElement<any>;
  state?: string;
  tooltip?: string | React.ReactElement<any>;
  tooltipTrigger?: React.ReactElement<any>;
  validationText?: string;
};
export type FieldWrapperProps = BoxProps & LocalFieldWrapperProps;
export type FieldElementProps = {
  a11yId?: LocalFieldWrapperProps['a11yId'];
  isRequired?: LocalFieldWrapperProps['isRequired'];
  state?: LocalFieldWrapperProps['state'];
  marginTop?: string;
};

const useProps = createHook<FieldWrapperProps>(
  (props, themeKey) => {
    const { children, label } = props;

    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.FieldWrapper,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    const uid = useUniqueId('FieldWrapper');

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          {label && (
            <Box marginBottom="minor-2">
              <Box display="flex" alignItems="center" lineHeight="1">
                {typeof label === 'string' ? (
                  // @ts-ignore
                  <Box use="label" htmlFor={uid}>
                    {label}
                  </Box>
                ) : (
                  label
                )}
              </Box>
            </Box>
          )}
          {children}
        </React.Fragment>
      )
    };
  },
  { themeKey: 'FieldWrapper' }
);

export const FieldWrapper = createComponent<FieldWrapperProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'FieldWrapper'
  }
);
