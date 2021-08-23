import * as React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import DocsLayout from '../../layouts/DocsLayout';
import { getMDXFiles, getMDXFileFromSlug } from '../../utils/mdx';
import useDocsComponents from '../../hooks/useDocsComponents';

// DocsPage.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default function DocsPage({ platform, mdx, toc }) {
  const { components } = useDocsComponents({ platform });
  return (
    <DocsLayout platform={platform} frontmatter={mdx?.frontmatter} toc={toc}>
      <MDXRemote {...mdx.source} components={components} />
    </DocsLayout>
  );
}

export async function getStaticPaths() {
  const mdxFiles = require('../../mdx-manifest.json');
  return {
    paths: mdxFiles.map((file) => ({
      params: {
        slug: (file as any).path.slice(1).split('/'),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const mdxFile = await getMDXFileFromSlug('/pages/docs', slug, { includeToc: true });
  return { props: { ...mdxFile } };
}
