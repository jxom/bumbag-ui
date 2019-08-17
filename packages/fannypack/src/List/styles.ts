import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const List = styleProps => cssClass`
  list-style: unset;
  list-style-type: none;

  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  & & {
    margin-left: ${space(4)(styleProps)}rem;
  }

  & {
    ${styleProps.isOrdered && getOrderedProperties(styleProps)};
  }

  & {
    ${styleProps.isHorizontal && getHorizontalProperties(styleProps)};
  }

  & {
    ${theme('List.base')(styleProps)};
  }
`;

export const ListItem = styleProps => cssClass`
  margin-bottom: ${space(1)(styleProps)}rem;

  & {
    ${theme('List.Item.base')(styleProps)};
  }
`;

export const getOrderedProperties = styleProps => cssClass`
  list-style-type: decimal;

  & & {
    list-style-type: lower-alpha;
  }

  & & & {
    list-style-type: lower-roman;
  }

  & {
    ${theme('List.ordered')(styleProps)};
  }
`;

export const getHorizontalProperties = styleProps => cssClass`
  & li {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: unset;
  }

  & {
    ${theme('List.horizontal')(styleProps)};
  }
`;
