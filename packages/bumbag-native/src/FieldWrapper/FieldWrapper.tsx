import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook, useUniqueId } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { Flex } from '../Flex';
import * as styles from './FieldWrapper.styles';

export type LocalFieldWrapperProps = {
  children?: (({ elementProps }: { elementProps: FieldElementProps }) => React.ReactNode) | React.ReactElement<any>;
  /** Sets the description text of the field wrapper. */
  description?: string | React.ReactElement<any>;
  /** Sets the bottom hint text of the field wrapper. */
  hint?: string | React.ReactElement<any>;
  /** Sets the optional flag (and displays optional text) on the field wrapper. */
  isOptional?: boolean;
  /** Sets the required flag (and a required astrix) on the field wrapper. */
  isRequired?: boolean;
  /** Sets the label on the field wrapper. */
  label?: string | React.ReactElement<any>;
  /** Sets the label type on the field wrapper. */
  labelType?: 'legend' | 'label';
  /** Sets the state of the field wrapper. */
  state?: 'success' | 'danger' | 'warning';
  /** Sets the tooltip of the field wrapper. Can be either a string, or a React component. */
  tooltip?: string | React.ReactElement<any>;
  /** Sets the tooltip trigger component. */
  tooltipTriggerComponent?: React.ReactElement<any>;
  /** Sets the bottom validation text of the field wrapper. */
  validationText?: string;
};
export type FieldWrapperProps = BoxProps & RNViewProps & LocalFieldWrapperProps;
export type FieldElementProps = {
  id?: string;
  state?: LocalFieldWrapperProps['state'];
};

const useProps = createHook<FieldWrapperProps>(
  (props) => {
    const {
      children,
      description,
      hint,
      isOptional,
      label,
      labelType,
      isRequired,
      overrides,
      state,
      validationText,
      variant,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    const uid = useUniqueId();

    const elementProps = { accessibilityLabelledBy: uid, variant, state };

    return {
      ...boxProps,
      children: (
        <React.Fragment>
          <styles.LabelWrapper overrides={overrides} variant={variant}>
            <Flex alignY="center">
              {label && (
                <>
                  {typeof label === 'string' ? (
                    <styles.Label overrides={overrides} nativeID={uid}>
                      {label}
                    </styles.Label>
                  ) : (
                    label
                  )}
                </>
              )}
              {isOptional && <styles.OptionalText overrides={overrides}>OPTIONAL</styles.OptionalText>}
              {isRequired && <styles.RequiredText overrides={overrides}>*</styles.RequiredText>}
            </Flex>
            {description && <styles.Description overrides={overrides}>{description}</styles.Description>}
          </styles.LabelWrapper>
          <styles.ContentWrapper overrides={overrides} variant={variant}>
            {typeof children === 'function'
              ? /*
                // @ts-ignore */
                children({ elementProps })
              : /*
                // @ts-ignore */
                React.cloneElement(children as React.ReactElement<any>, elementProps)}
          </styles.ContentWrapper>
          {hint && (
            <styles.HintWrapper overrides={overrides}>
              {typeof hint === 'string' ? <styles.Hint overrides={overrides}>{hint}</styles.Hint> : hint}
            </styles.HintWrapper>
          )}
          {validationText && (
            <styles.ValidationTextWrapper overrides={overrides}>
              <styles.ValidationText color={state} overrides={overrides}>
                {validationText}
              </styles.ValidationText>
            </styles.ValidationTextWrapper>
          )}
        </React.Fragment>
      ),
    };
  },
  { defaultProps: { variant: 'bordered' }, themeKey: 'native.FieldWrapper' }
);

export const FieldWrapper = createComponent<FieldWrapperProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.FieldWrapper,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.FieldWrapper',
    },
    themeKey: 'native.FieldWrapper',
  }
);
