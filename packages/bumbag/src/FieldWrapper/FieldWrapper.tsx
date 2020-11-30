import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, OutsideClickHandler, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button } from '../Button';
import { Card } from '../Card';
import { Disclosure } from '../Disclosure';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

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
export type FieldWrapperProps = BoxProps & LocalFieldWrapperProps;
export type FieldElementProps = {
  id?: string;
  isRequired?: LocalFieldWrapperProps['isRequired'];
  state?: LocalFieldWrapperProps['state'];
};

const useProps = createHook<FieldWrapperProps>(
  (props, { themeKey }) => {
    const {
      children,
      description,
      hint,
      isOptional,
      label,
      labelType,
      isRequired,
      state,
      tooltip,
      tooltipTriggerComponent,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);
    const className = useClassName({
      style: styles.FieldWrapper,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const labelClassName = useClassName({
      style: styles.Label,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Label',
    });
    const labelWrapperClassName = useClassName({
      style: styles.LabelWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'LabelWrapper',
    });
    const descriptionClassName = useClassName({
      style: styles.DescriptionText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'DescriptionText',
    });
    const hintClassName = useClassName({
      style: styles.HintText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'HintText',
    });
    const optionalClassName = useClassName({
      style: styles.OptionalText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'OptionalText',
    });
    const requiredClassName = useClassName({
      style: styles.RequiredText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'RequiredText',
    });
    const validationClassName = useClassName({
      style: styles.ValidationText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'ValidationText',
    });
    const tooltipTriggerClassName = useClassName({
      style: styles.TooltipTrigger,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'TooltipTrigger',
    });
    const tooltipPopoverClassName = useClassName({
      style: styles.TooltipPopover,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'TooltipPopover',
    });
    const disclosure = Disclosure.useState();
    const uid = useUniqueId();

    const elementProps = { isRequired, id: uid, state };

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          {label && (
            <Box className={labelWrapperClassName}>
              <Box display="flex" alignItems="center" lineHeight="none">
                {typeof label === 'string' ? (
                  <React.Fragment>
                    {labelType === 'legend' ? (
                      <Label use="legend" className={labelClassName}>
                        {label}
                      </Label>
                    ) : (
                      // @ts-ignore
                      <Label className={labelClassName} htmlFor={uid}>
                        {label}
                      </Label>
                    )}
                  </React.Fragment>
                ) : (
                  label
                )}
                {isOptional && <Box className={optionalClassName}>OPTIONAL</Box>}
                {isRequired && <Box className={requiredClassName}>*</Box>}
                {tooltip && (
                  <Box position="relative" marginLeft="minor-2">
                    <OutsideClickHandler onOutsideClick={disclosure.hide}>
                      {tooltipTriggerComponent ? (
                        React.cloneElement(tooltipTriggerComponent, { onClick: disclosure.toggle })
                      ) : (
                        <Button className={tooltipTriggerClassName} onClick={disclosure.toggle}>
                          <VisuallyHidden>Toggle tooltip</VisuallyHidden>
                          <Icon aria-hidden icon="question-circle" verticalAlign="-0.125rem" />
                        </Button>
                      )}
                    </OutsideClickHandler>
                    {disclosure.visible && (
                      <Card className={tooltipPopoverClassName}>
                        {typeof tooltip === 'string' ? <Text fontSize="150">{tooltip}</Text> : tooltip}
                      </Card>
                    )}
                  </Box>
                )}
              </Box>
              {description && (
                <Box marginTop="minor-1">
                  {typeof description === 'string' ? (
                    <Text.Block className={descriptionClassName}>{description}</Text.Block>
                  ) : (
                    description
                  )}
                </Box>
              )}
            </Box>
          )}

          {typeof children === 'function'
            ? /*
            // @ts-ignore */
              children({ elementProps })
            : React.cloneElement(children as React.ReactElement<any>, elementProps)}

          {hint && (
            <Box marginTop="minor-1">
              {typeof hint === 'string' ? <Box className={hintClassName}>{hint}</Box> : hint}
            </Box>
          )}

          {validationText && (
            <Box className={validationClassName} color={state}>
              {validationText}
            </Box>
          )}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'FieldWrapper' }
);

export const FieldWrapper = createComponent<FieldWrapperProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      enableRenderPropsComposition: false,
      use: props.use,
      htmlProps: textProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'FieldWrapper',
    },
    themeKey: 'FieldWrapper',
  }
);
