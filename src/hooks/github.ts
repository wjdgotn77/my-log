import config from "@/variables/config";

export const fetchIssueList = async (): Promise<Issues> => {
  const issues = (await fetch(
    `https://api.github.com/repos/${config.github.owner}/${config.github.repo}/issues`,
    {
      headers: { Authorization: `Bearer ${config.github.accessToken}` },
      next: {
        tags: ["issues"],
      },
    }
  ).then((value) => value.json())) as Issues;

  issues.sort((a: Issues[number], b: Issues[number]) => {
    if (a.assignee && !b.assignee) {
      return -1;
    } else if (!a.assignee && b.assignee) {
      return 1;
    } else {
      return new Date(a.created_at) > new Date(b.created_at) ? -1 : 1;
    }
  });

  return issues;
};

export const fetchIssue = async (issueNumber: string): Promise<Issue> => {
  const issue = (await fetch(
    `https://api.github.com/repos/${config.github.owner}/${config.github.repo}/issues/${issueNumber}`,
    {
      headers: { Authorization: `Bearer ${config.github.accessToken}` },
      // next: {
      //   tags: [`issue-${issueNumber}`],
      // },
    }
  ).then((value) => value.json())) as Issue;

  return issue;
};
