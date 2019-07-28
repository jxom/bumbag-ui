import { pickCSSProps } from './pickCSSProps';

// TODO:
// - theme overrides
// - position
export function useStyle(props) {
  const cssProps = pickCSSProps(props);
  return cssProps;
}
