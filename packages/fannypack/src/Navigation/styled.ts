import { theme } from 'styled-tools';
import _Navigation from 'reakit/Navigation';

import styled from '../styled';
import { NavigationProps } from './Navigation';

export const Navigation = styled(_Navigation)<NavigationProps>`
  ${theme('fannypack.Navigation.base')};
`;

export default Navigation;
