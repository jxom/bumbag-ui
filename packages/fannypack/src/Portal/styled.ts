import _Portal from 'reakit/Portal';

import styled, { theme } from '../styled';

export const Portal = styled(process.env.NODE_ENV === 'test' ? 'div' : _Portal)<{}>`
  ${theme('fannypack.Portal.base')};
`;

export default Portal;
