import { compileMDX } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import { Locale } from '@/config';

export async function getMDXContent(slug: string, locale: Locale) {
  const filePath = path.join(process.cwd(), 'src', 'content', locale, `${slug}.mdx`);
  
  try {
    const source = await readFile(filePath, 'utf8');
    const { content, frontmatter } = await compileMDX({
      source,
      options: { parseFrontmatter: true }
    });

    return {
      content,
      frontmatter,
    };
  } catch (error) {
    console.error(`Error loading MDX file: ${filePath}`, error);
    return null;
  }
}
