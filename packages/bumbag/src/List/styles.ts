import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const List = (styleProps) => cssClass`
  list-style: unset;
  list-style-type: none;

  & & {
    margin-left: ${space(4)(styleProps)}rem;
  }

  & li {
    &:not(:last-child) {
      margin-bottom: ${space(1)(styleProps)}rem;
    }
  }

  & {
    ${styleProps.isOrdered && getOrderedProperties(styleProps)};
  }

  & {
    ${styleProps.orientation === 'horizontal' && getHorizontalProperties(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, 'styles.base')(styleProps)};
  }
`;

export const ListItem = (styleProps) => cssClass`
  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, 'styles.base')(styleProps)};
  }
`;

export const getOrderedProperties = (styleProps) => cssClass`
  list-style-type: decimal;

  & & {
    list-style-type: lower-alpha;
  }

  & & & {
    list-style-type: lower-roman;
  }

  & {
    ${theme(styleProps.themeKey, 'styles.ordered')(styleProps)};
  }
`;

export const getHorizontalProperties = (styleProps) => cssClass`
  &&& li {
    display: inline-block;
    margin-bottom: unset;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  & {
    ${theme(styleProps.themeKey, 'styles.horizontal')(styleProps)};
  }
`;
