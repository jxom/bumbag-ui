import * as headingStyles from './Heading.styles';
import { Heading as _Heading, H1, H2, H3, H4, H5, H6 } from './Heading';

export * from './Heading';
export const Heading = Object.assign(_Heading, {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
});
export { headingStyles };
