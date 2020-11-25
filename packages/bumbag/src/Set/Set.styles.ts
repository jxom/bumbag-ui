import { css, cssClass } from '../styled';
import { breakpoint, space, theme } from '../utils';
import { getAlignmentAttributes } from '../Box/Box.styles';
import { getFlexAlignmentAttributes } from '../Flex/Flex.styles';

export const Set = (styleProps) => cssClass`
  display: flex;

  ${
    styleProps.orientation === 'vertical'
      ? css`
          flex-direction: column;

          ${!styleProps.isFilled &&
          css`
            align-items: flex-start;
          `};

          ${getAlignmentAttributes(styleProps)}

          & {
            ${theme(styleProps.themeKey, `styles.vertical`)(styleProps)};
          }
        `
      : css`
          ${breakpoint(
            styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
            css`
              flex-direction: column;

              ${!styleProps.isFilled &&
              css`
                align-items: flex-start;
              `};

              ${getAlignmentAttributes(styleProps)}

              & {
                ${theme(styleProps.themeKey, `styles.vertical`)(styleProps)};
              }
            `,
            {
              else: css`
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                margin-left: -${space(styleProps.spacing)(styleProps)}rem;
                margin-top: -${space(styleProps.spacing)(styleProps)}rem;

                ${getFlexAlignmentAttributes(styleProps)}

                & {
                  ${theme(styleProps.themeKey, `styles.horizontal`)(styleProps)};
                }
              `,
            }
          )(styleProps)};
        `
  };

  &&& > * {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            &:not(:last-child) {
              margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
            }

            & {
              ${theme(styleProps.themeKey, `styles.child.vertical`)(styleProps)};
            }
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
              css`
                &:not(:last-child) {
                  margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
                }

                & {
                  ${theme(styleProps.themeKey, `styles.child.vertical`)(styleProps)};
                }
              `,
              {
                else: css`
                  margin-left: ${space(styleProps.spacing)(styleProps)}rem;
                  margin-top: ${space(styleProps.spacing)(styleProps)}rem;

                  & {
                    ${theme(styleProps.themeKey, `styles.child.horizontal`)(styleProps)};
                  }
                `,
              }
            )(styleProps)};
          `
    };

    ${theme(styleProps.themeKey, `styles.child.base`)(styleProps)};
  }

  &&& > *:first-child {
    ${theme(styleProps.themeKey, `styles.child.first`)(styleProps)};
  }

  &&& > *:not(:last-child):not(:first-child) {
    ${theme(styleProps.themeKey, `styles.child.middle`)(styleProps)};
  }

  &&& > *:last-child {
    ${theme(styleProps.themeKey, `styles.child.last`)(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
