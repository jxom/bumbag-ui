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

window.matchMedia = jest.fn().mockReturnValue({ addListener: jest.fn(), removeListener: jest.fn(), matches: [] });
