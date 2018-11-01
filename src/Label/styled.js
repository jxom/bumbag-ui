// @flow
import styled from 'reakit/styled';
import { theme } from 'styled-tools';
import Label from 'reakit/Label';

export default styled(Label)`
  display: block;

  ${theme('fannypack.Label.base')};
`;
