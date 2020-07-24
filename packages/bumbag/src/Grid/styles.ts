import { css, cssClass } from '../styled';
import { theme } from '../utils';

export const Grid = (styleProps) => cssClass`
  display: grid;

  ${
    styleProps.autoFlow &&
    css`
      grid-auto-flow: ${styleProps.autoFlow};
    `
  }
  ${
    styleProps.gap &&
    css`
      grid-gap: ${styleProps.gap};
    `
  }
  ${
    styleProps.template &&
    css`
      grid-template: ${styleProps.template};
    `
  }
  ${
    styleProps.templateAreas &&
    css`
      grid-template-areas: ${styleProps.templateAreas};
    `
  }
  ${
    styleProps.templateColumns &&
    css`
      grid-template-columns: ${styleProps.templateColumns};
    `
  }
  ${
    styleProps.templateRows &&
    css`
      grid-template-rows: ${styleProps.templateRows};
    `
  }
  ${
    styleProps.autoColumns &&
    css`
      grid-auto-columns: ${styleProps.autoColumns};
    `
  }
  ${
    styleProps.autoRows &&
    css`
      grid-auto-rows: ${styleProps.autoRows};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const GridItem = (styleProps) => cssClass`
  display: grid-item;

  ${
    styleProps.area &&
    css`
      grid-area: ${styleProps.area};
    `
  }
  ${
    styleProps.column &&
    css`
      grid-column: ${styleProps.column};
    `
  }
  ${
    styleProps.row &&
    css`
      grid-row: ${styleProps.row};
    `
  }
  ${
    styleProps.columnStart &&
    css`
      grid-column-start: ${styleProps.columnStart};
    `
  }
  ${
    styleProps.columnEnd &&
    css`
      grid-column-end: ${styleProps.columnEnd};
    `
  }
  ${
    styleProps.rowStart &&
    css`
      grid-row-start: ${styleProps.rowStart};
    `
  }
  ${
    styleProps.rowEnd &&
    css`
      grid-row-end: ${styleProps.rowEnd};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
