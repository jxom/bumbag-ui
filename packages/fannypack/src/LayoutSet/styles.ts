import { css, cssClass } from '../styled';

export const LayoutSet = styleProps => cssClass`
  ${
    styleProps.isHorizontal
      ? css`
          display: flex;

          & > * {
            flex: 1;
          }
        `
      : css`
          display: block;
        `
  };
`;
