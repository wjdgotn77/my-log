import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";


export default function PostPage({ data, content, mdxSource }: any) {
  return (
    <div>
      <Head>
        <title>Post | {data.title}</title>
      </Head>
      <h1>{data.title}</h1>
      <div>{data?.date}</div>
      <MDXRemote {...mdxSource} components={{SyntaxHighlighter}}></MDXRemote>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync(path.join('posts'));
  // posts 출력값 : [ 'test.mdx', 'test2.mdx' ]
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const POST_PATH = path.join(process.cwd(), 'posts');
  const markdownWithMeta = fs.readFileSync(path.join(POST_PATH, `${params?.slug}.mdx`), 'utf-8');
  const { data, content } = matter(markdownWithMeta);
  // https://www.npmjs.com/package/gray-matter
  /**
   * 
  data: {
    title: 'FE Tech Blog hi',
    date: 'June 9, 2022',
    description: 'Learn how to create and use functions',
    thumbnailUrl: '/javascript-functions-thumbnail.jpeg',
    tags: [ 'Bonnie', 'Maeve' ]
  }
   */

  // TODO: mdxSource options 살펴볼 것.
  const mdxSource = await serialize(content);

return {
  props: { data, content, mdxSource },
};
};