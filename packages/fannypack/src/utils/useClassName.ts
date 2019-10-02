import * as React from 'react';
import buildClassNames from 'classnames';
import _uniq from 'lodash/uniq';

import { ThemeContext } from '../styled';

export function useClassName({
  style,
  prevClassName,
  styleProps,
  themeKey
}: {
  style: any;
  prevClassName?: string;
  styleProps: any;
  themeKey?: string;
}) {
  const theme = React.useContext(ThemeContext);
  const className = style({ theme, themeKey, ...styleProps });
  const classNames = buildClassNames(className, prevClassName, themeKey ? `fp-${themeKey}` : undefined);
  const uniqueClassNames = _uniq(classNames.split(' ')).join(' ');
  return uniqueClassNames;
}
