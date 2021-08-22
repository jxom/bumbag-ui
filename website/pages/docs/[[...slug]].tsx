import * as React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import DocsLayout from '../../layouts/DocsLayout';
import { getMDXFiles, getMDXFileFromSlug } from '../../utils/mdx';
import useDocsComponents from '../../hooks/useDocsComponents';

// DocsPage.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default function DocsPage({ platform, mdx, mdxFiles, toc }) {
  const { components } = useDocsComponents({ platform });
  return (
    <DocsLayout mdxFiles={mdxFiles} platform={platform} frontmatter={mdx?.frontmatter} toc={toc}>
      <MDXRemote {...mdx.source} components={components} />
    </DocsLayout>
  );
}

export async function getStaticPaths() {
  const mdxFiles = await getMDXFiles('/pages/docs', { includeMDX: false });
  return {
    paths: mdxFiles.map((file) => ({
      params: {
        slug: (file as any).path.slice(1).split('/'),
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const mdxFiles = await getMDXFiles('/pages/docs', { includeMDX: false });
  const mdxFile = await getMDXFileFromSlug('/pages/docs', slug, { includeToc: true });
  return { props: { ...mdxFile, mdxFiles } };
}
