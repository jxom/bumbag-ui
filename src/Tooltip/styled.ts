import { theme } from 'styled-tools';
// @ts-ignore
import _Tooltip from '@jmoxey/reakit/Tooltip';

import styled from '../styled';
import { LocalTooltipProps } from './Tooltip';

const Tooltip = styled(_Tooltip)<LocalTooltipProps>`
  background: black;
  border-radius: 2px;
  color: white;
  opacity: 0.8;
  font-size: ${theme('fannypack.fontSizes.small')}rem;
  font-weight: ${theme('fannypack.fontWeights.normal')};
  padding: ${theme('fannypack.layout.spacing.xxxsmall')}rem ${theme('fannypack.layout.spacing.xxsmall')}rem;

  & {
    ${theme('fannypack.Tooltip.base')};
  }
`;

export default Tooltip;
