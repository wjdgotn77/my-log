import { fetchIssueList } from "@/hooks";

import { IssueList } from "@/components/blog";

export default async function Home() {
  const issueList = await fetchIssueList();

  return (
    <main className="max-w-screen-md m-auto px-5">
      <IssueList issueList={issueList} />
    </main>
  );
}
