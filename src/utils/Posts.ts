import type { IFrontmatter, MarkdownInstance } from '@/types/IFrontmatter';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() -
      new Date(a.frontmatter.publishDate).valueOf()
  );
};