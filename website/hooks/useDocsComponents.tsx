import React from 'react';
import * as bumbag from 'bumbag';

import CapsizeExample from '../components/CapsizeExample';
import SlugHeading from '../components/SlugHeading';
import LiveCode from '../components/Live/LiveCode';
import Theme from '../components/Theme';
import PaletteColor from '../components/PaletteColor';

export default function useDocsComponents({ platform }): any {
  const { colorMode } = bumbag.useColorMode();

  const components = React.useMemo(
    () => ({
      ...bumbag,
      CapsizeExample,
      PaletteColor,
      Theme: (props) => <Theme {...props} />,
      a: (props: any) => <bumbag.Link {...props} />,
      blockquote: (props: any) => (
        <bumbag.Blockquote
          backgroundColor={colorMode === 'dark' ? 'primaryShade' : 'primaryTint'}
          borderColor="primary"
          marginTop="major-2"
          marginBottom="major-2"
          {...props}
        />
      ),
      code: (props: any) => <bumbag.Code {...props} />,
      inlineCode: (props: any) => (
        <bumbag.Code fontSize="15px" {...props} backgroundColor="transparent" palette="primary" />
      ),
      h1: (props: any) => (
        <SlugHeading marginTop="major-2" marginBottom="major-6" fontWeight="800" letterSpacing="300" {...props} />
      ),
      h2: (props: any) => (
        <SlugHeading
          use="h2"
          fontSize="500"
          marginTop="major-6"
          marginBottom="major-4"
          fontWeight="800"
          letterSpacing="300"
          {...props}
        />
      ),
      h3: (props: any) => (
        <SlugHeading
          fontSize="400"
          use="h3"
          marginTop="major-6"
          marginBottom="major-4"
          fontWeight="700"
          letterSpacing="300"
          {...props}
        />
      ),
      h4: (props: any) => <SlugHeading fontSize="300" use="h4" marginTop="major-6" marginBottom="major-4" {...props} />,
      h5: (props: any) => <bumbag.Heading use="h5" marginTop="major-6" marginBottom="major-4" {...props} />,
      h6: (props: any) => <bumbag.Heading use="h6" marginTop="major-6" marginBottom="major-4" {...props} />,
      p: (props: any) => (
        <bumbag.Paragraph
          {...props}
          color="text200"
          lineHeight="300"
          fontSize="17px"
          overrides={{
            Paragraph: {
              styles: {
                base: bumbag.css`
                &:not(:last-child) {
                  margin-bottom: 1.75rem;
                }
              `,
              },
            },
          }}
        />
      ),
      ul: (props: any) => (
        <bumbag.List
          listStyleType="disc"
          listStylePosition="outside"
          marginLeft="major-4"
          marginBottom="major-4"
          marginTop="-0.5rem"
          {...props}
        />
      ),
      ol: (props: any) => (
        <bumbag.List
          listStyleType="decimal"
          listStylePosition="outside"
          marginLeft="major-4"
          marginBottom="major-4"
          marginTop="-0.5rem"
          {...props}
        />
      ),
      li: (props: any) => <bumbag.ListItem marginBottom="major-1" {...props} />,
      strong: (props: any) => <bumbag.Text fontWeight="semibold" {...props} />,
      pre: (props: any) => <LiveCode platform={platform} {...props.children.props} />,
      table: (props: any) => <bumbag.Table marginBottom="major-4" marginTop="major-4" {...props} />,
      th: (props: any) => <bumbag.Table.HeadCell {...props} />,
      tr: (props: any) => <bumbag.Table.Row {...props} />,
      td: (props: any) => <bumbag.Table.Cell {...props} />,
      tbody: (props: any) => <bumbag.Table.Body {...props} />,
      thead: (props: any) => <bumbag.Table.Head {...props} />,
    }),
    [colorMode, platform]
  );

  return { components };
}
