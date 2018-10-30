// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import Field from 'reakit/Field';

import _Label from '../Label';
import _Text from '../Text';

export const Label = styled(_Label)`
  margin-bottom: 0 !important;

  & {
    ${theme('Field.label')};
  }
`;

export const DescriptionText = styled(_Text)`
  display: block;
  font-size: 0.8rem;

  & {
    ${theme('Field.description')};
  }
`;

export const HintText = styled(_Text)`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  & {
    ${theme('Field.hint')};
  }
`;

export const OptionalText = styled(_Text)`
  font-size: 0.8rem;
  color: ${palette('textLightest')};

  & {
    ${theme('Field.optional')};
  }
`;

export const ValidationText = styled(_Text)`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  & {
    ${theme('Field.validation')};
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

  ${theme('Field.base')};
`;
