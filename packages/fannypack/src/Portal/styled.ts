import Portal from 'reakit/Portal';

import styled, { theme } from '../styled';

export default styled(process.env.NODE_ENV === 'test' ? 'div' : Portal)<{}>`
  ${theme('fannypack.Portal.base')};
`;
