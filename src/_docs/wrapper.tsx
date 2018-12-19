import * as React from 'react';
import 'parse-prop-types';
import ThemeProvider from '../ThemeProvider';
import {
  faIgloo,
  faSearch,
  faClipboard,
  faThumbsUp,
  faPen,
  faLongArrowAltRight,
  faFile,
  faComments,
  faUser
} from '@fortawesome/free-solid-svg-icons';

const theme = {
  Icon: {
    icons: {
      calendar: {
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        paths: [
          'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z'
        ]
      }
    },
    iconSets: [
      {
        icons: [faIgloo, faSearch, faClipboard, faThumbsUp, faPen, faLongArrowAltRight, faFile, faComments, faUser],
        prefix: 'solid-',
        type: 'font-awesome' as 'font-awesome'
      }
    ]
  }
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Wrapper;
