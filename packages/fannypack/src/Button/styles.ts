import { css, cssClass, palette, space, theme } from '../styled';

export const Button = styleProps => cssClass`
  align-items: center;
  background-color: ${palette()(styleProps)};
  border-radius: 4px;
  color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${theme('fontWeights.semibold')(styleProps)};
  min-height: 2.5em;
  justify-content: center;
  padding: 0 0.8rem;
  text-decoration: none;
  hyphens: auto;

  ${styleProps.palette === 'default' &&
    css`
      border: 1px solid ${palette('gray100')(styleProps)};
    `};

  & {
    ${theme('Button.base')(styleProps)};
  }

  &:focus {
    outline: unset;
    z-index: 2;
    box-shadow: ${palette(styleProps.palette === 'default' ? 'primary' : `${styleProps.palette}300`)(
      styleProps
    )} 0px 0px 0px
      2px;

    ${theme('Button.focus')(styleProps)};
  }

  ${styleProps.size && getSizeProperties(styleProps)}
`;

export const getSizeProperties = styleProps => {
  const styles = {
    small: css`
      & {
        font-size: ${theme('fontSizes.100')(styleProps)}em;
        min-height: ${space(8)(styleProps)}em;
        padding: 0 ${space(2)(styleProps)}rem;
      }
      & {
        ${theme('Button.sizes.small')(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme('Button.sizes.default')(styleProps)};
      }
    `,
    medium: css`
      & {
        min-height: ${space(12)(styleProps)}em;
        padding: 0 ${space(5)(styleProps)}rem;
      }
      & {
        ${theme('Button.sizes.medium')(styleProps)};
      }
    `,
    large: css`
      & {
        font-size: ${theme('fontSizes.300')(styleProps)}em;
        min-height: ${space(12)(styleProps)}em;
        padding: 0 ${space(6)(styleProps)}rem;
      }
      & {
        ${theme('Button.sizes.large')(styleProps)};
      }
    `
  };
  return styles[styleProps.size];
};
