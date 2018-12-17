import { theme } from 'styled-tools';
import Backdrop from '@jmoxey/reakit/Backdrop';
import styled from '../styled';
import { LocalBackdropProps } from './Backdrop';

export default styled(Backdrop)<LocalBackdropProps>`
  background-color: black;
  opacity: 0.4;

  & {
    ${theme('fannypack.Backdrop.base')};
  }
`;
