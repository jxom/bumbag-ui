// @flow
import { css } from 'reakit/styled';
import type { HeadingThemeConfig, Stylesheet } from '../types';

const getSubHeadingAttributes = ({ subHeadingOverrides }: { subHeadingOverrides: Stylesheet } = {}) => props => {
  const { isSubHeading } = props;
  if (isSubHeading) {
    return css`
      font-weight: 500;

      & {
        ${subHeadingOverrides};
      }
    `;
  }
};

export default ({
  base: baseOverrides,
  h1: h1Overrides,
  h2: h2Overrides,
  h3: h3Overrides,
  h4: h4Overrides,
  h5: h5Overrides,
  h6: h6Overrides,
  subHeading: subHeadingOverrides
}: HeadingThemeConfig = {}): Stylesheet => css`
  font-weight: bold;
  margin-bottom: 1rem;

  .heading& + .sub-heading {
    margin-top: -1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h1& {
    font-size: 3rem;
    & {
      ${h1Overrides};
    }
  }
  h2& {
    font-size: 2.5rem;
    & {
      ${h2Overrides};
    }
  }
  h3& {
    font-size: 2rem;
    & {
      ${h3Overrides};
    }
  }
  h4& {
    font-size: 1.5rem;
    & {
      ${h4Overrides};
    }
  }
  h5& {
    font-size: 1.25rem;
    & {
      ${h5Overrides};
    }
  }
  h6& {
    font-size: 1rem;
    & {
      ${h6Overrides};
    }
  }

  & {
    ${getSubHeadingAttributes({ subHeadingOverrides })};
  }

  ${baseOverrides};
`;
