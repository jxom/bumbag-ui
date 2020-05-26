import { cssClass } from '../styled';
import { palette, space, theme } from '../utils';

export const Autosuggest = styleProps => cssClass`
  position: relative;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AutosuggestPopover = styleProps => cssClass`
  &&& {
    max-width: 100%;
    width: 100%;
    max-height: 300px;
    overflow-y: scroll;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AutosuggestItem = styleProps => cssClass`
  &&& {
    font-weight: 300;

    &[aria-selected="true"] {
      background-color: ${palette('white600')(styleProps)};
    }

    &[aria-disabled="true"] {
      color: ${palette('gray100')(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const AutosuggestStaticItem = styleProps => cssClass`
  padding: ${space(1.5)(styleProps)}rem ${space(4)(styleProps)}rem;
  width: 100%;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
