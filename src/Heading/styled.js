// @flow
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';
import Heading from 'reakit/Heading';
import Icon from '../Icon/styled';

const subHeadingProperties = css`
  font-weight: ${theme('fannypack.fontWeights.semibold')};

  & {
    ${theme('fannypack.Heading.subHeading')};
  }
`;

export default styled(Heading)`
  font-weight: ${theme('fannypack.fontWeights.bold')};
  line-height: 1.2;
  margin-bottom: 1rem;

  .heading& + .sub-heading {
    margin-top: -1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h1& {
    font-size: 3em;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 2em;
    }
    & {
      ${theme('fannypack.Heading.h1')};
    }
  }
  h2& {
    font-size: 2.5em;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 1.8em;
    }
    & {
      ${theme('fannypack.Heading.h2')};
    }
  }
  h3& {
    font-size: 2em;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 1.6em;
    }
    & {
      ${theme('fannypack.Heading.h3')};
    }
  }
  h4& {
    font-size: 1.5em;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 1.4em;
    }
    & {
      ${theme('fannypack.Heading.h4')};
    }
  }
  h5& {
    font-size: 1.25em;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 1.2em;
    }
    & {
      ${theme('fannypack.Heading.h5')};
    }
  }
  h6& {
    font-size: 1em;
    & {
      ${theme('fannypack.Heading.h6')};
    }
  }

  & ${Icon} {
    top: 0.1em;
  }

  & {
    ${props => props.isSubHeading && subHeadingProperties};
  }

  ${theme('fannypack.Heading.base')};
`;
