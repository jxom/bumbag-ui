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
  let className;
  if (Array.isArray(style)) {
    className = style.map(style => style({ theme, themeKey, ...styleProps }));
  } else {
    className = [style({ theme, themeKey, ...styleProps })];
  }
  const classNames = buildClassNames(
    ...className,
    prevClassName,
    themeKey ? `fp-${themeKey.replace('.', '')}` : undefined
  );
  const uniqueClassNames = _uniq(classNames.split(' ')).join(' ');
  return uniqueClassNames;
}
