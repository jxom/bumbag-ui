import { theme } from 'styled-tools';
import _Backdrop from 'reakit/Backdrop';
import styled from '../styled';
import { LocalBackdropProps } from './Backdrop';

export const Backdrop = styled(_Backdrop)<LocalBackdropProps>`
  background-color: black;
  opacity: 0.6;

  & {
    ${theme('fannypack.Backdrop.base')};
  }
`;

export default Backdrop;
