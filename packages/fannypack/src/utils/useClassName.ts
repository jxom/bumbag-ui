import * as React from 'react';
import buildClassNames from 'classnames';

import { ThemeContext } from '../styled';

export function useClassName({
  style,
  prevClassName,
  styleProps
}: {
  style: any;
  prevClassName?: string;
  styleProps: any;
}) {
  const theme = React.useContext(ThemeContext);
  const className = style({ theme, ...styleProps });
  const classNames = buildClassNames(className, prevClassName);
  return classNames;
}
