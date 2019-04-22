import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import MarkdownRenderer from 'markdown-react-js';
// @ts-ignore
import _get from 'lodash/get';
import { BoxProps } from 'reakit/ts/Box/Box';

import { Box } from '../primitives';
import Blockquote from '../Blockquote';
import Divider from '../Divider';
import Image from '../Image';
import Link from '../Link';
import List from '../List';
import Paragraph from '../Paragraph';
import Table from '../Table';
import Text from '../Text';
import Heading from '../Heading';

export type LocalMarkdownProps = {
  content: string;
  elementProps?: Object;
};
export type MarkdownProps = BoxProps & LocalMarkdownProps;

const tags = (props: LocalMarkdownProps): { [key: string]: { Component: BoxProps['use']; props?: Object } } => ({
  p: {
    Component: Paragraph,
    props: _get(props, 'elementProps.p', {})
  },
  strong: {
    Component: Text,
    props: {
      fontWeight: 'bold',
      ..._get(props, 'elementProps.strong', {})
    }
  },
  em: {
    Component: Text,
    props: {
      use: 'em',
      ..._get(props, 'elementProps.em', {})
    }
  },
  a: {
    Component: Link,
    props: _get(props, 'elementProps.a', {})
  },
  blockquote: {
    Component: Blockquote,
    props: _get(props, 'elementProps.blockquote', {})
  },
  h1: {
    Component: Heading,
    props: {
      use: 'h1',
      ..._get(props, 'elementProps.h1', {})
    }
  },
  h2: {
    Component: Heading,
    props: {
      use: 'h2',
      ..._get(props, 'elementProps.h2', {})
    }
  },
  h3: {
    Component: Heading,
    props: {
      use: 'h3',
      ..._get(props, 'elementProps.h3', {})
    }
  },
  h4: {
    Component: Heading,
    props: {
      use: 'h4',
      ..._get(props, 'elementProps.h4', {})
    }
  },
  h5: {
    Component: Heading,
    props: {
      use: 'h5',
      ..._get(props, 'elementProps.h5', {})
    }
  },
  h6: {
    Component: Heading,
    props: {
      use: 'h6',
      ..._get(props, 'elementProps.h6', {})
    }
  },
  hr: {
    Component: Divider,
    ..._get(props, 'elementProps.hr', {})
  },
  ul: {
    Component: List,
    props: {
      listStyleType: 'disc',
      listStylePosition: 'inside',
      ..._get(props, 'elementProps.ul', {})
    }
  },
  ol: {
    Component: List,
    props: {
      isOrdered: true,
      listStylePosition: 'inside',
      ..._get(props, 'elementProps.ol', {})
    }
  },
  li: {
    Component: List.Item,
    props: _get(props, 'elementProps.li', {})
  },
  table: {
    Component: Table,
    props: _get(props, 'elementProps.table', {})
  },
  tbody: {
    Component: Table.Body,
    props: _get(props, 'elementProps.tbody', {})
  },
  thead: {
    Component: Table.Head,
    props: _get(props, 'elementProps.thead', {})
  },
  tfoot: {
    Component: Table.Foot,
    props: _get(props, 'elementProps.tfoot', {})
  },
  tr: {
    Component: Table.Row,
    props: _get(props, 'elementProps.tr', {})
  },
  td: {
    Component: Table.Cell,
    props: _get(props, 'elementProps.td', {})
  },
  th: {
    Component: Table.HeadCell,
    props: _get(props, 'elementProps.th', {})
  },
  img: {
    Component: Image,
    props: _get(props, 'elementProps.img', {})
  }
});

export const markdownPropTypes = {
  content: PropTypes.string.isRequired,
  elementProps: PropTypes.object
};
export const markdownDefaultProps = {
  elementProps: {}
};

export class Markdown extends React.Component<LocalMarkdownProps> {
  static propTypes = markdownPropTypes;
  static defaultProps = markdownDefaultProps;

  handleIterate = (Tag: string, props: Object, children: React.ReactElement<any>) => {
    const { Component, props: overrideProps = {} } = tags(this.props)[Tag] || { Component: Tag };
    return (
      // @ts-ignore
      <Component {...props} {...overrideProps || {}}>
        {children}
      </Component>
    );
  };

  render = () => {
    const { content, ...props } = this.props;
    return (
      <Box {...props}>
        <MarkdownRenderer onIterate={this.handleIterate} text={content} />
      </Box>
    );
  };
}

const C: React.ComponentClass<MarkdownProps> = Markdown;
export default C;
