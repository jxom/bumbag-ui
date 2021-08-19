import * as React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import DocsLayout from '../../layouts/DocsLayout';
import getMDXFiles, { getMDXFileFromSlug } from '../../utils/getMDXFiles';
import useDocsComponents from '../../hooks/useDocsComponents';

DocsPage.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default function DocsPage({ path, mdx }) {
  const { components } = useDocsComponents({ type: path.includes('native') ? 'native' : 'docs' });
  return <MDXRemote {...mdx.source} components={components} />;
}

export async function getStaticPaths() {
  const mdxFiles = await getMDXFiles('/pages/docs');
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
  const mdxFile = await getMDXFileFromSlug('/pages/docs', slug);
  return { props: { ...mdxFile } };
}
