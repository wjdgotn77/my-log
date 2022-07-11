import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { styled } from "stitches.config";

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0",
});

const Des = styled("div", {});

const Ul = styled("ul", {});

const Li = styled("li", {
  "&::marker": {
    color: "lime",
  },
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hackney</title>
        <meta name="Description" content="Hackney's Devlog" />
      </Head>
      <Main>
        <Des>Hi, I'm Haesoo.</Des>
        <Des>What I'm interested in these days...🧐</Des>
        <Ul>
          <Li>Next JS</Li>
          <Li>
            <Link href={"/threejs"}>Three.js</Link>
          </Li>
        </Ul>
      </Main>
    </div>
  );
};

export default Home;
