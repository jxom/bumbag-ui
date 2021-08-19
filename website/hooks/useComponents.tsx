import React from 'react';
import * as bumbag from 'bumbag';
import * as bumbagNative from 'bumbag-native';
import { HighlightedCode } from 'bumbag-addon-highlighted-code';
import { Markdown } from 'bumbag-addon-markdown';
import { Picker } from '@bumbag-native/picker';

export default function useComponents({ platform }): any {
  const components = React.useMemo(
    () => ({
      ...bumbag,
      ...(platform === 'native' ? bumbagNative : {}),
      // require,
      HighlightedCode,
      Markdown,
      Picker,
    }),
    [platform]
  );

  return { components };
}
