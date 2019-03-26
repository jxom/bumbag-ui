import { css, palette, theme, space } from '../../styled';

export default {
  base: css`
    color: ${(props: any) =>
      props.palette === 'default' ? palette('text')(props) : palette(`${props.palette}Inverted`)(props)};
    fill: ${(props: any) =>
      props.palette === 'default' ? palette('text')(props) : palette(`${props.palette}Inverted`)(props)};
  `,
  outlined: css`
    background-color: white;
  `,
  sizes: {
    medium: css`
      font-size: ${theme('fannypack.fontSizes.300')}rem;
      min-height: ${space(10)}em;
    `
  }
};
