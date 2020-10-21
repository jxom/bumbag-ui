import isPropValid from '@emotion/is-prop-valid';

const omitProps = ['focusable', 'spacing', 'size', 'kind', 'variant', 'orientation', 'wrap', 'colorMode', 'title'];

export function pickHTMLProps<P extends object>(props: P) {
  const filteredProps: Partial<P> = {};

  for (const prop in props) {
    if (isPropValid(prop) && !omitProps.includes(prop)) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}
