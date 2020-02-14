import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import {
  useClassName,
  createComponent,
  createElement,
  createHook,
  OutsideClickHandler,
  useUniqueId
} from '../utils';
import { Box, BoxProps } from '../Box';
import { Button } from '../Button';
import { Card } from '../Card';
import { Hidden } from '../Hidden';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './styles';

export type LocalFieldWrapperProps = {
  children?: (({ elementProps }: { elementProps: FieldElementProps }) => React.ReactNode) | React.ReactElement<any>;
  description?: string | React.ReactElement<any>;
  hint?: string | React.ReactElement<any>;
  isOptional?: boolean;
  isRequired?: boolean;
  label?: string | React.ReactElement<any>;
  labelType?: 'legend' | 'label';
  state?: 'success' | 'danger' | 'warning';
  tooltip?: string | React.ReactElement<any>;
  tooltipTriggerComponent?: React.ReactElement<any>;
  validationText?: string;
};
export type FieldWrapperProps = BoxProps & LocalFieldWrapperProps;
export type FieldElementProps = {
  id?: string;
  isRequired?: LocalFieldWrapperProps['isRequired'];
  state?: LocalFieldWrapperProps['state'];
};

const useProps = createHook<FieldWrapperProps>(
  (props, { themeKey, themeKeyOverride }) => {
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
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const labelClassName = useClassName({
      style: styles.Label,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Label'
    });
    const descriptionClassName = useClassName({
      style: styles.DescriptionText,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'DescriptionText'
    });
    const hintClassName = useClassName({
      style: styles.HintText,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'HintText'
    });
    const optionalClassName = useClassName({
      style: styles.OptionalText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'OptionalText'
    });
    const requiredClassName = useClassName({
      style: styles.RequiredText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'RequiredText'
    });
    const validationClassName = useClassName({
      style: styles.ValidationText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'ValidationText'
    });
    const tooltipTriggerClassName = useClassName({
      style: styles.TooltipTrigger,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'TooltipTrigger'
    });
    const tooltipPopoverClassName = useClassName({
      style: styles.TooltipPopover,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'TooltipPopover'
    });
    const hidden = Hidden.useState();
    const uid = useUniqueId('FieldWrapper');

    const elementProps = { isRequired, id: uid, state };

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          {label && (
            <Box marginBottom="minor-2">
              <Box display="flex" alignItems="center" lineHeight="1">
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
                    <OutsideClickHandler onOutsideClick={hidden.hide}>
                      {tooltipTriggerComponent ? (
                        React.cloneElement(tooltipTriggerComponent, { onClick: hidden.toggle })
                      ) : (
                        <Button className={tooltipTriggerClassName} onClick={hidden.toggle}>
                          <VisuallyHidden>Toggle tooltip</VisuallyHidden>
                          <Icon aria-hidden icon="question-circle" verticalAlign="-0.125rem" />
                        </Button>
                      )}
                    </OutsideClickHandler>
                    {hidden.visible && (
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
                    <Box className={descriptionClassName}>{description}</Box>
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
      )
    };
  },
  { themeKey: 'FieldWrapper' }
);

export const FieldWrapper = createComponent<FieldWrapperProps>(
  props => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      enableRenderPropsComposition: false,
      use: props.use,
      htmlProps: textProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'FieldWrapper'
  }
);
