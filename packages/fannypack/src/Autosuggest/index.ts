import * as styles from './styles';
import { Autosuggest as _Autosuggest } from './Autosuggest';
import { AutosuggestStaticItem } from './AutosuggestStaticItem';
import { AutosuggestItem } from './AutosuggestItem';

export * from './Autosuggest';
export * from './AutosuggestField';
export const Autosuggest = Object.assign(_Autosuggest, {
  StaticItem: AutosuggestStaticItem,
  Item: AutosuggestItem,
});
export { styles as autosuggestStyles };
