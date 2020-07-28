import * as React from 'react';

// Thanks to Brent Jackson for this little trick. What a legend.
const noflash = `(function() { try {
  var mode = localStorage.getItem('bb.mode');
  if (!mode) return
  document.body.classList.add('bb-mode-' + mode);
} catch (e) {} })();`;

export function InitializeColorMode() {
  return <script key="bb-no-flash" dangerouslySetInnerHTML={{ __html: noflash }} />; // eslint-disable-line react/no-danger
}
