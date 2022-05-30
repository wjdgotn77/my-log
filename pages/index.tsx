import type { NextPage } from "next";
import { styled } from "@stitches/react";
import { chakra, Box } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Log</title>
        <meta name="Description" content="MyLog" />
      </Head>
    </div>
  );
};

export default Home;
