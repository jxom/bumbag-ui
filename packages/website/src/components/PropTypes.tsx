import * as React from 'react';
import Props from 'pretty-proptypes';
import { cssProps } from 'bumbag';

export default function PropsTypes(props) {
  const overrides = React.useMemo(() => {
    return Object.keys(cssProps).reduce((currentOverrrides, cssAttribute) => {
      return {
        ...currentOverrrides,
        [cssAttribute]: () => null,
      };
    }, {});
  }, []);
  return <Props {...props} heading="" overrides={overrides} />;
}
