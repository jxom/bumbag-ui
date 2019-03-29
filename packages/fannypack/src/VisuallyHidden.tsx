import * as React from 'react';
import * as PropTypes from 'prop-types';
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

export type VisuallyHiddenProps = {
  children: React.ReactNode;
};

export const VisuallyHidden: React.FunctionComponent<VisuallyHiddenProps> = ({ children }) => (
  <_VisuallyHidden>{children}</_VisuallyHidden>
);

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired
};

export default VisuallyHidden;
