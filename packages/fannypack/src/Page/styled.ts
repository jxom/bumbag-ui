import styled, { css, space, theme } from '../styled';
import { Container } from '../Container';
import { PageContentProps } from './PageContent';

export const PageContent = styled(Container)<PageContentProps>`
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding-top: ${space(2, 'major')}rem;
    padding-bottom: ${space(2, 'major')}rem;

    & {
      ${theme('fannypack.Page.Content.mobile')};
    }
  }

  ${props =>
    props.isFluid &&
    css`
      padding-top: ${space(2, 'major')}rem;
      padding-bottom: ${space(2, 'major')}rem;

      & {
        ${theme('fannypack.Page.Content.fluid')};
      }
    `}

  & {
    ${theme('fannypack.Page.Content.base')};
  }
`;
