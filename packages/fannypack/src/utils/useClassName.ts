import * as React from 'react';
import buildClassNames from 'classnames';
import _uniq from 'lodash/uniq';

import { useTheme } from './useTheme';

export function useClassName({
  style,
  prevClassName,
  styleProps,
  themeKey,
  themeKeyOverride,
  themeKeySuffix,
}: {
  style: any;
  prevClassName?: string;
  styleProps: any;
  themeKey?: string;
  themeKeyOverride?: string;
  themeKeySuffix?: string;
}) {
  const { theme } = useTheme();

  let className;
  let newThemeKey = `${themeKeyOverride || themeKey || ''}${themeKeySuffix ? `.${themeKeySuffix}` : ''}`;
  if (Array.isArray(style)) {
    className = style.map((style) => style({ theme, ...styleProps, themeKey: newThemeKey }));
  } else {
    className = [style({ theme, ...styleProps, themeKey: newThemeKey })];
  }

  const originalThemeKey = themeKeyOverride
    ? `${themeKey || ''}${themeKeySuffix ? `.${themeKeySuffix}` : ''}`
    : undefined;
  const classNames = buildClassNames(
    ...className,
    prevClassName,
    newThemeKey ? `fp-${newThemeKey.replace(/\./g, '')}` : undefined,
    originalThemeKey ? `fp-${originalThemeKey.replace(/\./g, '')}` : undefined
  );
  const uniqueClassNames = _uniq(classNames.split(' ')).join(' ');
  return uniqueClassNames;
}
