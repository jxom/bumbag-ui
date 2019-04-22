import _Label from 'reakit/Label';
import { theme } from 'styled-tools';

import styled, { space } from '../styled';
import { LabelProps } from './Label';

export const Label = styled(_Label)<LabelProps>`
  display: block;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  margin-bottom: ${space(1)}rem;
  line-height: 1;

  & {
    ${theme('fannypack.Label.base')};
  }
`;

export default Label;
