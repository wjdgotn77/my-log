import { IssueItem } from "./item";

type IssueListProps = {
  issueList: Issues;
};

export const IssueList = ({ issueList }: IssueListProps) => {
  const filteredOpenIssues = issueList.filter(
    (issue) => issue.state === "open"
  );

  return (
    <section>
      <article className="flex flex-col">
        {filteredOpenIssues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </article>
    </section>
  );
};
