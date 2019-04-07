import _Hidden from 'reakit/Hidden';

import styled, { theme } from '../styled';
import { HiddenHideProps } from './HiddenHide';
import { HiddenShowProps } from './HiddenShow';
import { HiddenToggleProps } from './HiddenToggle';

export const HiddenHide = styled(_Hidden.Hide)<HiddenHideProps>`
  ${theme('fannypack.Hidden.Hide.base')};
`;

export const HiddenShow = styled(_Hidden.Show)<HiddenShowProps>`
  ${theme('fannypack.Hidden.Show.base')};
`;

export const HiddenToggle = styled(_Hidden.Toggle)<HiddenToggleProps>`
  ${theme('fannypack.Hidden.Toggle.base')};
`;

export const Hidden = styled(_Hidden)`
  & {
    ${theme('fannypack.Hidden.base')};
  }
`;

export default Hidden;
