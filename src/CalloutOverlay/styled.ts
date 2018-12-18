import { theme } from 'styled-tools';
import styled from '../styled';
import _Callout from '../Callout';
import Overlay from '../Overlay';

export const Callout = styled(_Callout)`
  max-width: 500px;

  @media screen and (max-width: calc(500px + ${theme('fannypack.layout.spacing.small')}em)) {
    width: 100%;

    & {
      ${theme('fannypack.CalloutOverlay.Callout.mobile')};
    }
  }

  & {
    ${theme('fannypack.CalloutOverlay.Callout.base')};
  }
`;

export default styled(Overlay)`
  ${theme('fannypack.CalloutOverlay.base')};
`;
