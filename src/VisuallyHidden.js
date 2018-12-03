import React from 'react';
import styled from './styled';
import { Box } from './primitives';

const _VisuallyHidden = styled(Box)`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  position: absolute;
`;

export const VisuallyHidden = ({ children }: Props) => <_VisuallyHidden>{children}</_VisuallyHidden>;

export default VisuallyHidden;
