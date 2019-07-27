import { cssProps } from './cssProps';

export function pickCSSProps<P extends object>(props: P) {
  let filteredProps: Partial<P> | undefined;

  for (const prop in props) {
    if (prop in cssProps) {
      if (!filteredProps) {
        filteredProps = {};
      }
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}
