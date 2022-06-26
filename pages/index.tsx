import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FrontMatter, IndexType } from '../utils/utils';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>My Log</title>
        <meta name="Description" content="MyLog" />
      </Head>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>{post.frontMatter.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<IndexType> = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data } = matter(markdownWithMeta);
    const frontMatter = data as FrontMatter;
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
