import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import { FrontMatter, PostType } from '../../utils/utils';

export default function PostPage({
  frontMatter,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Post | {frontMatter.title}</title>
      </Head>
      <h1>{frontMatter.title}</h1>
      <div>{frontMatter?.date}</div>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }}></MDXRemote>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync(path.join('posts'));
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostType> = async ({ params }) => {
  const POST_PATH = path.join(process.cwd(), 'posts');
  const markdownWithMeta = fs.readFileSync(
    path.join(POST_PATH, `${params?.slug}.mdx`),
    'utf-8'
  );
  const { data, content } = matter(markdownWithMeta);
  const frontMatter: FrontMatter = data;
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkToc],
    },
  });

  return {
    props: { frontMatter, mdxSource },
  };
};
