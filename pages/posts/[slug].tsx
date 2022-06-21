import { GetStaticPaths } from "next";
import fs from 'fs';
import path from 'path';


export default function PostPage () {
  return <>포스트 페이지 입니다</>
}

const getStaticPaths:GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/posts`);
  const posts = await res.json();

  const paths = posts.map((post : any) => ({
    params : { slug: post }
  }))

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params }: any) => {
  console.log(params)
  return {
    props: {}
  }
}
