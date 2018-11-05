// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import Field from 'reakit/Field';

import _Label from '../Label';
import _Text from '../Text';

export const Label = styled(_Label)`
  margin-bottom: 0 !important;

  & {
    ${theme('fannypack.FieldWrapper.label')};
  }
`;

export const DescriptionText = styled(_Text)`
  display: block;
  font-size: 0.8rem;

  & {
    ${theme('fannypack.FieldWrapper.description')};
  }
`;

export const HintText = styled(_Text)`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  & {
    ${theme('fannypack.FieldWrapper.hint')};
  }
`;

export const OptionalText = styled(_Text)`
  font-size: 0.8rem;
  color: ${palette('textLightest')};
  margin-left: 0.5rem;

  & {
    ${theme('fannypack.FieldWrapper.optional')};
  }
`;

export const ValidationText = styled(_Text)`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  & {
    ${theme('fannypack.FieldWrapper.validation')};
  }
`;

export default styled(Field)`
  & {
    ${props =>
      props.isFullWidth &&
      css`
        width: 100%;
      `};
  }

  ${theme('fannypack.FieldWrapper.base')};
`;
