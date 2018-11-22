import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { Box } from '../primitives';
import Heading from '../Heading';

export const AlertTitle = styled(Heading)`
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  margin-bottom: ${theme('fannypack.layout.spacing.xxsmall')}rem;

  & {
    ${theme('fannypack.Alert.Title.base')};
  }
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
  background-color: ${props =>
    props.palette === 'default' ? palette('textTint')(props) : palette(`${props.palette}Tint`)(props)};
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  color: ${props =>
    props.palette === 'default' ? palette('textTintInverted')(props) : palette(`${props.palette}TintInverted`)(props)};
  fill: ${props =>
    props.palette === 'default' ? palette('textTintInverted')(props) : palette(`${props.palette}TintInverted`)(props)};
`;

export default styled(Box)`
  background-color: white;
  border: 1px solid ${palette('whiteDarkest')};
  border-left: 4px solid
    ${props => (props.palette === 'default' ? palette('text')(props) : palette(props.palette)(props))};
  border-radius: 4px;
  color: ${getTextColor};
  padding: 1rem;

  & {
    ${props => props.hasTint && tintAttributes};
  }

  & {
    ${theme('fannypack.Alert.base')};
  }
`;
