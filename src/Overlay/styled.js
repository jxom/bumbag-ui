import Overlay from 'reakit/Overlay';
import { theme } from 'styled-tools';
import styled from '../styled';

export const OverlayHide = styled(Overlay.Hide)`
  ${theme('fannypack.Overlay.Hide.base')};
`;

export const OverlayShow = styled(Overlay.Show)`
  ${theme('fannypack.Overlay.Show.base')};
`;

export const OverlayToggle = styled(Overlay.Toggle)`
  ${theme('fannypack.Overlay.Toggle.base')};
`;

export default styled(Overlay)`
  ${theme('fannypack.Overlay.base')};
`;
