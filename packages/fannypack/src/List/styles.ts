import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const List = styleProps => cssClass`
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
    ${theme('List.css.root')(styleProps)};
  }
`;

export const ListItem = styleProps => cssClass`
  & .fp-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme('List.Item.css.root')(styleProps)};
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
    ${theme('List.css.ordered')(styleProps)};
  }
`;

export const getHorizontalProperties = styleProps => cssClass`
  &&& li {
    display: inline-block;
    margin-bottom: unset;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  & {
    ${theme('List.css.horizontal')(styleProps)};
  }
`;
