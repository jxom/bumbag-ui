import { css, cssClass } from '../styled';
import { altitude, breakpoint, fontSize, fontWeight, palette, space, theme, borderRadius } from '../utils';

export const Table = (styleProps) => cssClass`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
  color: ${palette('text200')(styleProps)};

  ${
    styleProps.hasDividers &&
    css`
      & tbody tr:not(:last-child) {
        border-bottom: 1px solid ${palette('white800', { dark: 'gray900' })(styleProps)};
      }
    `
  }

  ${
    styleProps.isHoverable &&
    css`
      & tbody tr:hover {
        background-color: ${palette('white600', { dark: 'black200' })(styleProps)};
      }
    `
  }

  ${
    styleProps.isStriped &&
    css`
      & tbody tr:nth-child(even) {
        background-color: ${palette('white600', { dark: 'black200' })(styleProps)};
      }
    `
  }

  ${
    styleProps.isResponsive &&
    css`
      ${breakpoint(
        `max-${styleProps.responsiveBreakpoint}`,
        css`
          & thead {
            display: none;
          }

          & tbody tr:not(:last-child) {
            border-bottom: 1px solid ${palette('white800', { dark: 'gray900' })(styleProps)};
          }

          & tbody td {
            display: block;
            text-align: left !important;
            padding: ${space(2)(styleProps)}rem ${space(4)(styleProps)}rem;

            &::before {
              display: block;
              content: attr(data-content);
              ${tableHeadCellText(styleProps)};

              & {
                ${theme(styleProps.themeKey, `styles.responsive.headCellText`)(styleProps)};
              }
            }
          }

          & tfoot td {
            display: block;
            text-align: left !important;
          }

          & {
            ${theme(styleProps.themeKey, `styles.responsive.base`)(styleProps)};
          }
        `
      )(styleProps)};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableHead = (styleProps) => cssClass`
  border-bottom: 1px solid ${palette('white800', { dark: 'gray900' })(styleProps)};

  ${
    styleProps.tableVariant !== 'minimal' &&
    css`
      background-color: ${palette('white600', { dark: 'black200' })(styleProps)};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableRow = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableHeadCell = (styleProps) => cssClass`
  padding: ${space(3)(styleProps)}rem ${space(4)(styleProps)}rem;
  vertical-align: middle;
  ${tableHeadCellText(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableCell = (styleProps) => cssClass`
  padding: ${space(3)(styleProps)}rem ${space(4)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableFoot = (styleProps) => cssClass`
  border-top: 1px solid ${palette('white800', { dark: 'gray900' })(styleProps)};

  ${
    styleProps.tableVariant !== 'minimal' &&
    css`
      background-color: ${palette('white600', { dark: 'black200' })(styleProps)};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableBody = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TableWrapper = (styleProps) => cssClass`
  border-radius: ${borderRadius('default')(styleProps)};
  overflow: hidden;

  ${
    styleProps.variant === 'default' &&
    css`
      border: 1px solid ${palette('white800', { dark: 'gray900' })(styleProps)};
    `
  }

  ${
    styleProps.variant === 'shadowed' &&
    css`
      ${altitude('100')(styleProps)};
    `
  }


  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const tableHeadCellText = (styleProps) => css`
  color: ${palette('text100')(styleProps)};
  font-weight: ${fontWeight('semibold')(styleProps)};
  font-size: ${fontSize('100')(styleProps)}rem;
  text-transform: uppercase;
`;
