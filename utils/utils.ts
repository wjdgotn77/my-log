import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface FrontMatter {
  title?: string;
  date?: string;
  description?: string;
  thumbnailUrl?: string;
  tags?: string[];
}

export type IndexType = {
  posts: {
    frontMatter: FrontMatter;
    slug: string;
  }[];
};

export interface PostType {
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
}
