import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { Box } from '../primitives';
import Button from '../Button';
import Heading from '../Heading';

export const AlertTitle = styled(Heading)`
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  margin-bottom: ${theme('fannypack.layout.spacing.xxsmall')}rem;

  & {
    ${theme('fannypack.Alert.Title.base')};
  }
`;

export const AlertClose = styled(Button)`
  width: 24px;
  height: 24px;
  padding: 0;
  text-align: right;

  ${props =>
    props.isAbsolute
      ? css`
          position: absolute;
          right: 0.5rem;
          top: 0.5rem;
        `
      : css`
          margin: 0 0.5rem;
        `};

  &:hover {
    background-color: ${palette('whiteDarker')};
    & {
      ${theme('fannypack.Alert.Close.hover')};
    }
  }

  ${theme('fannypack.Alert.Close.base')};
`;

const getTextColor = props => {
  const { palette: _palette } = props;
  if (_palette === 'default') {
    return palette('text')(props);
  }
  if (_palette === 'warning') {
    return palette('warningDarkest')(props);
  }
  return palette(_palette)(props);
};

const tintAttributes = css`
  background-color: ${props => props.type && palette(`${props.type}Tint`)(props)};
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  color: ${props => props.type && palette(`${props.type}TintInverted`)(props)};
  fill: ${props => props.type && palette(`${props.type}TintInverted`)(props)};
  ${theme('fannypack.Alert.tint')};
`;

export default styled(Box)`
  background-color: white;
  border: 1px solid ${palette('whiteDarkest')};
  border-left: 4px solid ${props => props.type && palette(props.type)(props)};
  border-radius: 4px;
  color: ${getTextColor};
  position: relative;

  & {
    ${props => props.hasTint && tintAttributes};
  }

  & {
    ${theme('fannypack.Alert.base')};
  }
`;
