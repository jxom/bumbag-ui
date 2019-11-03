import 'babel-polyfill';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
