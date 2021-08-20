import fs from 'fs';
import shell from 'shelljs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function getMDXFile(mdxDir, filePath, { includeMDX = true }) {
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);

  const pagesPath = filePath.split(mdxDir)[1];
  const pagesPathArray = pagesPath.split('/');
  const relativeDirectoryArray = pagesPathArray.slice(0, pagesPathArray.length - 1);
  const relativeDirectory = relativeDirectoryArray.join('/');
  const fileName = pagesPathArray[pagesPathArray.length - 1];
  const name = fileName.replace('.mdx', '');
  const path = `${relativeDirectory}/${name}`;

  let mdxSource;
  try {
    if (includeMDX) {
      mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [],
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
    mdx: {
      ...(includeMDX
        ? {
            content,
            source: mdxSource,
          }
        : {}),
      frontmatter: data,
    },
  };
}

export async function getMDXFileFromSlug(dir, slug) {
  const mdxDir = `${process.cwd()}${dir}`;
  const filePath = `${mdxDir}/${slug.join('/')}.mdx`;
  return getMDXFile(mdxDir, filePath, {});
}

export default async function getMDXFiles(dir, opts) {
  const mdxDir = `${process.cwd()}${dir}`;
  const paths = shell.ls('-R', `${mdxDir}/**/*.mdx`);
  return Promise.all(
    paths.map(async (filePath) => {
      return getMDXFile(mdxDir, filePath, opts);
    })
  );
}
