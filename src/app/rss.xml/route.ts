import RSS from "rss";

import { domain } from "@/variables/constants";

import { fetchIssueList } from "@/hooks";

export async function GET() {
  const feed = new RSS({
    title: "haesoo's blog",
    description:
      "안녕하세요, 식물을 키우고 요리하는 것을 좋아하며 늘 살아보고 싶었던 서촌에서 지내고 있는 프론트엔드 개발자 정해수입니다. 이곳에서는 개인적인 생각을 정리하고, 프로젝트를 통해 얻은 것을 기록하면서 지금까지의 여정을 돌아보고 앞으로 나아가는 과정을 적어보려 합니다. 또 이를 통해 인생을 제대로 살아보기 위한 고민들을 솔직하게 정리합니다.",
    generator: "RSS for Node and Next.js",
    feed_url: `${domain}feed.xml`,
    site_url: `${domain}`,
    copyright: `Copyright ${new Date().getFullYear().toString()}`,
    language: "ko-KR",
    managingEditor: "wjdgotn77@gmail.com (Haesoo Cheong)",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const allPosts = await fetchIssueList();
  const filteredOpenIssues = allPosts.filter((issue) => issue.state === "open");

  if (filteredOpenIssues) {
    filteredOpenIssues.map((post: Issue) => {
      feed.item({
        author: "Haesoo Cheong",
        title: post.title,
        description: post.body || "",
        url: `${domain}blog/${post.number}`,
        date: post.created_at,
      });
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
