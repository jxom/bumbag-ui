import Heading from 'reakit/Heading';

import styled, { css, space, theme, s } from '../styled';
// @ts-ignore
import Icon from '../Icon/styled';
import { HeadingProps } from './Heading';

const subHeadingProperties = css`
  font-weight: ${theme('fannypack.fontWeights.semibold')};

  & {
    ${theme('fannypack.Heading.subHeading')};
  }
`;

export default styled(Heading)<HeadingProps>`
  font-weight: ${theme('fannypack.fontWeights.bold')};
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  .heading& + .sub-heading {
    margin-top: -1rem;
  }

  h1& {
    font-size: ${theme('fannypack.fontSizes.700')}rem;
    & {
      ${theme('fannypack.Heading.h1')};
    }
  }
  h2& {
    font-size: ${theme('fannypack.fontSizes.600')}rem;
    & {
      ${theme('fannypack.Heading.h2')};
    }
  }
  h3& {
    font-size: ${theme('fannypack.fontSizes.500')}rem;
    & {
      ${theme('fannypack.Heading.h3')};
    }
  }
  h4& {
    font-size: ${theme('fannypack.fontSizes.400')}rem;
    & {
      ${theme('fannypack.Heading.h4')};
    }
  }
  h5& {
    font-size: ${theme('fannypack.fontSizes.300')}rem;
    & {
      ${theme('fannypack.Heading.h5')};
    }
  }
  h6& {
    font-size: ${theme('fannypack.fontSizes.200')}rem;
    & {
      ${theme('fannypack.Heading.h6')};
    }
  }

  & ${s(Icon)} {
    top: 0.15em;
  }

  & {
    ${props => props.isSubHeading && subHeadingProperties};
  }

  ${theme('fannypack.Heading.base')};
`;
