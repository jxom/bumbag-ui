import { theme } from 'styled-tools';
import _Tooltip from 'reakit/Tooltip';

import styled, { space } from '../styled';
import { LocalTooltipProps } from './Tooltip';

const Tooltip = styled(_Tooltip)<LocalTooltipProps>`
  background: black;
  border-radius: 2px;
  color: white;
  opacity: 0.8;
  font-size: ${theme('fannypack.fontSizes.100')}rem;
  font-weight: ${theme('fannypack.fontWeights.normal')};
  padding: ${space(1)}rem ${space(2)}rem;

  & {
    ${theme('fannypack.Tooltip.base')};
  }
`;

export default Tooltip;
