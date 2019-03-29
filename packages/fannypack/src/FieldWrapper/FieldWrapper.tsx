import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FieldProps as ReakitFieldProps } from 'reakit/ts/Field/Field';

import { Box, Flex } from '../primitives';
import { Omit } from '../types';
import _FieldWrapper, { Label, DescriptionText, HintText, OptionalText, ValidationText } from './styled';

export type LocalFieldWrapperProps = {
  a11yId?: string;
  children: (({ elementProps }: { elementProps: FieldElementProps }) => React.ReactNode) | React.ReactElement<any>;
  className?: string;
  description?: string | React.ReactElement<any>;
  hint?: string | React.ReactElement<any>;
  isOptional?: boolean;
  isRequired?: boolean;
  label?: string | React.ReactElement<any>;
  state?: string;
  validationText?: string;
};
export type FieldWrapperProps = Omit<ReakitFieldProps, 'label'> & LocalFieldWrapperProps;
export type FieldElementProps = {
  a11yId?: LocalFieldWrapperProps['a11yId'];
  isRequired?: LocalFieldWrapperProps['isRequired'];
  state?: LocalFieldWrapperProps['state'];
  marginTop?: string;
};

export const FieldWrapper: React.FunctionComponent<LocalFieldWrapperProps> = ({
  a11yId,
  children,
  description,
  hint,
  isOptional,
  isRequired,
  label,
  state,
  validationText,
  ...props
}) => {
  const elementProps: FieldElementProps = { isRequired, a11yId, state };
  return (
    <_FieldWrapper {...props}>
      {label && (
        <Box marginBottom="minor-2">
          <Flex alignItems="center">
            {typeof label === 'string' ? <Label htmlFor={a11yId}>{label}</Label> : label}
            {isOptional && <OptionalText>OPTIONAL</OptionalText>}
          </Flex>
          {typeof description === 'string' ? (
            <DescriptionText>{description}</DescriptionText>
          ) : (
            <div>{description}</div>
          )}
        </Box>
      )}

      {typeof children === 'function'
        ? children({ elementProps })
        : React.cloneElement(children as React.ReactElement<any>, elementProps)}

      {typeof hint === 'string' ? <HintText>{hint}</HintText> : <div>{hint}</div>}

      {validationText && <ValidationText color={state}>{validationText}</ValidationText>}
    </_FieldWrapper>
  );
};

export const fieldWrapperPropTypes = {
  a11yId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  className: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isOptional: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  state: PropTypes.string,
  validationText: PropTypes.string
};
FieldWrapper.propTypes = fieldWrapperPropTypes;

export const fieldWrapperDefaultProps = {
  a11yId: undefined,
  className: undefined,
  description: undefined,
  hint: undefined,
  isOptional: undefined,
  isRequired: undefined,
  label: undefined,
  state: undefined,
  validationText: undefined
};
FieldWrapper.defaultProps = fieldWrapperDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<FieldWrapperProps> = FieldWrapper;
export default C;
