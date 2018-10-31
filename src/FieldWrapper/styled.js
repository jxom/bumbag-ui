// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import Field from 'reakit/Field';

import _Label from '../Label';
import _Text from '../Text';

export const Label = styled(_Label)`
  margin-bottom: 0 !important;

  & {
    ${theme('FieldWrapper.label')};
  }
`;

export const DescriptionText = styled(_Text)`
  display: block;
  font-size: 0.8rem;

  & {
    ${theme('FieldWrapper.description')};
  }
`;

export const HintText = styled(_Text)`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  & {
    ${theme('FieldWrapper.hint')};
  }
`;

export const OptionalText = styled(_Text)`
  font-size: 0.8rem;
  color: ${palette('textLightest')};

  & {
    ${theme('FieldWrapper.optional')};
  }
`;

export const ValidationText = styled(_Text)`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  & {
    ${theme('FieldWrapper.validation')};
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

  ${theme('FieldWrapper.base')};
`;
