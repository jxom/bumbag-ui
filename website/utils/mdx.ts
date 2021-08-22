import fs from 'fs';
import shell from 'shelljs';
import matter from 'gray-matter';
import { toc as _toc } from 'mdast-util-toc';
import remarkSlug from 'remark-slug';
import slugger from 'github-slugger';
import { serialize } from 'next-mdx-remote/serialize';

export async function getMDXFile(mdxDir, filePath, { includeMDX = true, includeToc = false }) {
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);

  const pagesPath = filePath.split(mdxDir)[1];
  const pagesPathArray = pagesPath.split('/');
  const relativeDirectoryArray = pagesPathArray.slice(0, pagesPathArray.length - 1);
  const relativeDirectory = relativeDirectoryArray.join('/');
  const fileName = pagesPathArray[pagesPathArray.length - 1];
  const name = fileName.replace('.mdx', '');
  const path = `${relativeDirectory}/${name}`;

  let toc;
  if (includeToc) {
    toc = getTableOfContents(content);
  }

  let mdxSource;
  try {
    if (includeMDX) {
      mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          // @ts-ignore
          remarkPlugins: [remarkSlug],
          rehypePlugins: [],
        },
        scope: data,
      });
    }
  } catch (err) {}

  let platform = 'web';
  if (path.includes('/native')) {
    platform = 'native';
  }

  return {
    filePath,
    fileName,
    name,
    path,
    relativeDirectory,
    platform,
    ...(includeToc
      ? {
          toc,
        }
      : {}),
    mdx: {
      frontmatter: data,
      ...(includeMDX
        ? {
            content,
            source: mdxSource,
          }
        : {}),
    },
  };
}

export async function getMDXFileFromSlug(dir, slug, opts) {
  const mdxDir = `${process.cwd()}${dir}`;
  const filePath = `${mdxDir}/${slug.join('/')}.mdx`;
  return getMDXFile(mdxDir, filePath, opts);
}

export async function getMDXFiles(dir, opts) {
  const mdxDir = `${process.cwd()}${dir}`;
  const paths = shell.ls('-R', `${mdxDir}/**/*.mdx`);
  return Promise.all(
    paths.map(async (filePath) => {
      return getMDXFile(mdxDir, filePath, opts);
    })
  );
}

// https://github.com/hashicorp/next-mdx-remote/issues/53#issuecomment-725906664
export function getTableOfContents(mdxContent: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
  // @ts-ignore
  const headings = [...mdxContent.matchAll(regexp)];
  let tableOfContents = [];

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const text = heading[2].trim();
      const level = heading[1].trim().length;
      const id = slugger.slug(text, false);

      return {
        text,
        id,
        level,
      };
    });
  }

  return tableOfContents;
}
