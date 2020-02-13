import * as React from 'react';
import buildClassNames from 'classnames';
import _uniq from 'lodash/uniq';

import { ThemeContext } from '../styled';

export function useClassName({
  style,
  prevClassName,
  styleProps,
  themeKey,
  themeKeySuffix
}: {
  style: any;
  prevClassName?: string;
  styleProps: any;
  themeKey?: string;
  themeKeySuffix?: string;
}) {
  const theme = React.useContext(ThemeContext);
  let className;
  let newThemeKey = `${styleProps.themeKey || themeKey || ''}${themeKeySuffix ? `.${themeKeySuffix}` : ''}`;
  if (Array.isArray(style)) {
    className = style.map(style => style({ theme, ...styleProps, themeKey: newThemeKey }));
  } else {
    className = [style({ theme, ...styleProps, themeKey: newThemeKey })];
  }
  const classNames = buildClassNames(
    ...className,
    prevClassName,
    newThemeKey ? `fp-${newThemeKey.replace(/\./g, '')}` : undefined
  );
  const uniqueClassNames = _uniq(classNames.split(' ')).join(' ');
  return uniqueClassNames;
}
