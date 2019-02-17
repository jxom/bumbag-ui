import { palette, theme } from 'styled-tools';
import { Box } from '../primitives';
import styled, { css, space } from '../styled';
import Button from '../Button';
import Heading from '../Heading';
import { AlertProps } from './Alert';
import { AlertCloseProps } from './AlertClose';

export const AlertTitle = styled(Heading)`
  font-weight: ${theme('fannypack.fontWeights.semibold')};

  && {
    margin-bottom: ${space(2)}em;
  }

  & {
    ${theme('fannypack.Alert.Title.base')};
  }
`;

export const AlertClose = styled(Button)<AlertCloseProps>`
  width: 24px;
  height: 24px;
  padding: 0;
  text-align: right;

  ${props =>
    props.isAbsolute
      ? css`
          position: absolute;
          right: ${space(2)}rem;
          top: ${space(2)}rem;
        `
      : css`
          margin: 0 ${space(2)}rem;
        `};

  &:hover {
    background-color: ${palette('white700')};
    & {
      ${theme('fannypack.Alert.Close.hover')};
    }
  }

  ${theme('fannypack.Alert.Close.base')};
`;

const tintAttributes = css<AlertProps>`
  background-color: ${props => props.type && palette(`${props.type}Tint`)(props)};
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  color: ${props => props.type && palette(`${props.type}TintInverted`)(props)};
  fill: ${props => props.type && palette(`${props.type}TintInverted`)(props)};
  ${theme('fannypack.Alert.tint')};
`;

export default styled(Box)<AlertProps>`
  background-color: white;
  border: 1px solid ${palette('white800')};
  border-left: 4px solid ${props => props.type && palette(props.type)(props)};
  border-radius: 4px;
  position: relative;

  & {
    ${(props: AlertProps) => props.hasTint && tintAttributes};
  }

  & {
    ${theme('fannypack.Alert.base')};
  }
`;
