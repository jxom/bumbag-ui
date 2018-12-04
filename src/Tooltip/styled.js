// @flow
import styled from 'reakit/styled';
import _Tooltip from 'reakit/Tooltip';
import { theme } from 'styled-tools';

const Tooltip = styled(_Tooltip)`
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
