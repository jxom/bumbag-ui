import * as React from 'react';
import 'parse-prop-types';
// @ts-ignore
import qs from 'query-string';
import {
  faIgloo,
  faSearch,
  faClipboard,
  faThumbsUp,
  faPen,
  faLongArrowAltRight,
  faFile,
  faComments,
  faUser,
  faHandPaper,
  faFileSignature,
  faShare,
  faExternalLinkAlt,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

import ThemeProvider from '../ThemeProvider';

type Props = {
  children: React.ReactNode;
};
type State = {
  theme?: {};
};

const docsTheme = {
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
        icons: [
          faIgloo,
          faSearch,
          faClipboard,
          faThumbsUp,
          faPen,
          faLongArrowAltRight,
          faFile,
          faComments,
          faUser,
          faHandPaper,
          faShare,
          faFileSignature,
          faExternalLinkAlt,
          faTrashAlt
        ],
        prefix: 'solid-',
        type: 'font-awesome' as 'font-awesome'
      }
    ]
  }
};

class Wrapper extends React.Component<Props, State> {
  state = {
    theme: undefined
  };

  componentDidMount = async () => {
    const query = qs.parse(window.location.search);
    const { default: newTheme } = await import(`../themes/${query.theme}`);
    this.setState({
      theme: {
        ...docsTheme,
        ...newTheme
      }
    });
  };

  render = () => {
    const { children } = this.props;
    const { theme } = this.state;
    return theme ? <ThemeProvider theme={theme}>{children}</ThemeProvider> : null;
  };
}

export default Wrapper;
