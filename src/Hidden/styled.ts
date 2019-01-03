import Hidden from 'reakit/Hidden';

import styled, { theme } from '../styled';
import { HiddenHideProps } from './HiddenHide';
import { HiddenShowProps } from './HiddenShow';
import { HiddenToggleProps } from './HiddenToggle';

export const HiddenHide = styled(Hidden.Hide)<HiddenHideProps>`
  ${theme('fannypack.Hidden.Hide.base')};
`;

export const HiddenShow = styled(Hidden.Show)<HiddenShowProps>`
  ${theme('fannypack.Hidden.Show.base')};
`;

export const HiddenToggle = styled(Hidden.Toggle)<HiddenToggleProps>`
  ${theme('fannypack.Hidden.Toggle.base')};
`;

export default styled(Hidden)`
  & {
    ${theme('fannypack.Hidden.base')};
  }
`;
