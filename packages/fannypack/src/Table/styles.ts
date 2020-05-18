import { css, cssClass } from '../styled';
import { altitude, breakpoint, fontSize, fontWeight, palette, space, theme, borderRadius } from '../utils';

export const Table = styleProps => cssClass`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
  color: ${palette('text200')(styleProps)};

  ${styleProps.hasDividers &&
    css`
      & tbody tr:not(:last-child) {
        border-bottom: 1px solid ${palette(styleProps.dividerColor, styleProps.dividerColor)(styleProps)};
      }
    `}

  ${styleProps.isHoverable &&
    css`
      & tbody tr:hover {
        background-color: ${palette(styleProps.hoverColor, styleProps.hoverColor)(styleProps)};
      }
    `}

  ${styleProps.isStriped &&
    css`
      & tbody tr:nth-child(even) {
        background-color: ${palette(styleProps.stripeColor, styleProps.stripeColor)(styleProps)};
      }
    `}

  ${styleProps.isResponsive &&
    css`
      ${breakpoint(
        `max-${styleProps.responsiveBreakpoint}`,
        css`
          & thead {
            display: none;
          }

          & tbody tr:not(:last-child) {
            border-bottom: 1px solid ${palette(styleProps.dividerColor, styleProps.dividerColor)(styleProps)};
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
                ${theme(styleProps.themeKey, `css.responsive.headCellText`)(styleProps)};
              }
            }
          }

          & tfoot td {
            display: block;
            text-align: left !important;
          }

          & {
            ${theme(styleProps.themeKey, `css.responsive.root`)(styleProps)};
          }
        `
      )(styleProps)};
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableHead = styleProps => cssClass`
  border-bottom: 1px solid ${palette('white800')(styleProps)};

  ${styleProps.tableVariant !== 'minimal' &&
    css`
      background-color: ${palette('white600')(styleProps)};
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableRow = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableHeadCell = styleProps => cssClass`
  padding: ${space(3)(styleProps)}rem ${space(4)(styleProps)}rem;
  vertical-align: middle;
  ${tableHeadCellText(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableCell = styleProps => cssClass`
  padding: ${space(3)(styleProps)}rem ${space(4)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableFoot = styleProps => cssClass`
  border-top: 1px solid ${palette('white800')(styleProps)};

  ${styleProps.tableVariant !== 'minimal' &&
    css`
      background-color: ${palette('white600')(styleProps)};
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableBody = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TableWrapper = styleProps => cssClass`
  border-radius: ${borderRadius('default')(styleProps)};
  overflow: hidden;

  ${styleProps.variant === 'default' &&
    css`
      border: 1px solid ${palette('white800')(styleProps)};
    `}

  ${styleProps.variant === 'shadowed' &&
    css`
      ${altitude('100')(styleProps)};
    `}


  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const tableHeadCellText = styleProps => css`
  color: ${palette('text100')(styleProps)};
  font-weight: ${fontWeight('semibold')(styleProps)};
  font-size: ${fontSize('100')(styleProps)}rem;
  text-transform: uppercase;
`;
