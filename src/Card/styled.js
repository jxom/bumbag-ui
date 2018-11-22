import { theme } from 'styled-tools';
import styled, { css } from '../styled';
import { Box } from '../primitives';
import Pane from '../Pane';
import Heading from '../Heading';

export default styled(Pane)`
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `};
  }
  & {
    ${theme('fannypack.Card.base')};
  }
`;
export const CardContent = styled(Box)`
  max-height: 50vh;
  overflow-y: scroll;
  & {
    ${theme('fannypack.Card.Content.base')};
  }
`;
export const CardHeader = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${theme('fannypack.layout.spacing.small')}rem;
  position: relative;
  width: 100%;
  & {
    ${theme('fannypack.Card.Header.base')};
  }
`;
export const CardFooter = styled(Box)`
  padding-top: ${theme('fannypack.layout.spacing.small')}rem;
  width: 100%;
  & {
    ${theme('fannypack.Card.Footer.base')};
  }
`;
export const CardTitle = styled(Heading)`
  margin-bottom: 0px;
  & {
    ${theme('fannypack.Card.Title.base')};
  }
`;
