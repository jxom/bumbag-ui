import {
  useMenuState as useReakitMenuState,
  MenuStateReturn as ReakitMenuStateReturn,
  MenuInitialState as ReakitMenuInitialState
} from 'reakit';

export type ModalStateReturn = ReakitMenuStateReturn;
export type ModalInitialState = ReakitMenuInitialState;

export function useDropdownMenuState(initialState) {
  return useReakitMenuState({ gutter: 8, ...initialState });
}
