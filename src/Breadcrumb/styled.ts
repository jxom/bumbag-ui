import { theme, palette } from 'styled-tools';
import styled, { space } from '../styled';
import { List } from '../List';
import { Navigation } from '../Navigation';
import { Link } from '../Link';
import { BreadcrumbProps } from './Breadcrumb';
import { Inline } from '../primitives';

export const Breadcrumb = styled(Navigation)<BreadcrumbProps>`
  & li + li::before {
    border-right-color: ${props => palette(props.separationColor || 'text100', props.separationColor)};
    border-right-style: solid;
    border-right-width: ${space(0.5)}rem;
    content: '';
    display: inline-block;
    height: 0.8rem;
    margin: 0 ${space(4)}rem;
    margin-right: 0;
    transform: rotate(15deg);
  }

  & [aria-current='page'] {
    font-weight: ${theme('fannypack.fontWeights.semibold')};
    text-decoration: none;
  }

  & {
    ${theme('fannypack.Breadcrumb.base')};
  }
`;

export const BreadcrumbList = styled(List)`
  & li {
    margin-right: 0;
  }

  & {
    ${theme('fannypack.Breadcrumb.List.base')};
  }
`;

export const BreadcrumbStep = styled(List.Item)`
  & {
    ${theme('fannypack.Breadcrumb.Step.base')};
  }
`;

export const BreadcrumbSpan = styled(Inline)`
  & {
    ${theme('fannypack.Breadcrumb.Span.base')};
  }
`;

export const BreadcrumbLink = styled(Link)`
  & {
    ${theme('fannypack.Breadcrumb.Link.base')};
  }
`;
