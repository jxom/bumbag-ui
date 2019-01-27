import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import MarkdownRenderer from 'markdown-react-js';
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
};
export type MarkdownProps = BoxProps & LocalMarkdownProps;

const tags: { [key: string]: { Component: BoxProps['use']; props?: Object } } = {
  p: {
    Component: Paragraph
  },
  strong: {
    Component: Text,
    props: {
      fontWeight: 'bold'
    }
  },
  em: {
    Component: Text,
    props: {
      use: 'em'
    }
  },
  a: {
    Component: Link
  },
  blockquote: {
    Component: Blockquote
  },
  h1: {
    Component: Heading,
    props: {
      use: 'h1'
    }
  },
  h2: {
    Component: Heading,
    props: {
      use: 'h2'
    }
  },
  h3: {
    Component: Heading,
    props: {
      use: 'h3'
    }
  },
  h4: {
    Component: Heading,
    props: {
      use: 'h4'
    }
  },
  h5: {
    Component: Heading,
    props: {
      use: 'h5'
    }
  },
  h6: {
    Component: Heading,
    props: {
      use: 'h6'
    }
  },
  hr: {
    Component: Divider
  },
  ul: {
    Component: List,
    props: {
      listStyleType: 'disc',
      listStylePosition: 'inside'
    }
  },
  ol: {
    Component: List,
    props: {
      isOrdered: true,
      listStylePosition: 'inside'
    }
  },
  li: {
    Component: List.Item
  },
  table: {
    Component: Table
  },
  tbody: {
    Component: Table.Body
  },
  thead: {
    Component: Table.Head
  },
  tfoot: {
    Component: Table.Foot
  },
  tr: {
    Component: Table.Row
  },
  td: {
    Component: Table.Cell
  },
  th: {
    Component: Table.HeadCell
  },
  img: {
    Component: Image
  }
};

function handleIterate(Tag: string, props: Object, children: React.ReactElement<any>) {
  const { Component, props: overrideProps = {} } = tags[Tag] || { Component: Tag };
  return (
    // @ts-ignore
    <Component {...props} {...overrideProps || {}}>
      {children}
    </Component>
  );
}

export const Markdown: React.FunctionComponent<LocalMarkdownProps> = ({ content, ...props }) => (
  <Box {...props}>
    <MarkdownRenderer onIterate={handleIterate} text={content} />
  </Box>
);

Markdown.propTypes = {
  content: PropTypes.string.isRequired
};

const C: React.FunctionComponent<MarkdownProps> = Markdown;
export default C;
