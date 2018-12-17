import { theme } from 'styled-tools';
import Overlay from '@jmoxey/reakit/Overlay';

import styled from '../styled';
import { OverlayProps } from './Overlay';
import { OverlayHideProps } from './OverlayHide';
import { OverlayShowProps } from './OverlayShow';
import { OverlayToggleProps } from './OverlayToggle';

export const OverlayHide = styled(Overlay.Hide)<OverlayHideProps>`
  ${theme('fannypack.Overlay.Hide.base')};
`;

export const OverlayShow = styled(Overlay.Show)<OverlayShowProps>`
  ${theme('fannypack.Overlay.Show.base')};
`;

export const OverlayToggle = styled(Overlay.Toggle)<OverlayToggleProps>`
  ${theme('fannypack.Overlay.Toggle.base')};
`;

export default styled(Overlay)<OverlayProps>`
  ${theme('fannypack.Overlay.base')};
`;
