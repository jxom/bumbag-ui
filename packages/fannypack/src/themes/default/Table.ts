// @ts-ignore
import _get from 'lodash/get';

import { palette, space } from '../../styled';

export default (overrides: any) => ({
  borderColor: palette('white900'),
  spacing: space(2),
  ..._get(overrides, 'Table', {}),
  hover: {
    backgroundColor: palette('white700'),
    ..._get(overrides, 'Table.hover', {})
  },
  striped: {
    backgroundColor: palette('white600'),
    ..._get(overrides, 'Table.striped', {})
  }
});
