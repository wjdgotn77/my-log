const config: {
  github: {
    owner: string;
    repo: string;
    accessToken: string | undefined;
  };
} = {
  github: {
    owner: "wjdgotn77",
    repo: "my-log",
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
  },
};

export default config;
