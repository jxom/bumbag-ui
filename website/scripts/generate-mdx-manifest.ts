import { writeFileSync } from 'fs-extra';
import { getMDXFiles } from '../utils/mdx';

generateMdxManifest();

async function generateMdxManifest() {
  const mdxFiles = await getMDXFiles('/pages/docs', { includeMDX: false });
  writeFileSync('./mdx-manifest.json', JSON.stringify(mdxFiles, null, 2));
}
