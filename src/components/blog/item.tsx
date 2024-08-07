"use client";

import { useRouter } from "next/navigation";
import { Title } from "../common";

export const IssueItem = ({ issue }: { issue: Issue }) => {
  const router = useRouter();

  const navigateToIssueDetail = () => {
    router.push(`/blog/${issue.number}`);
    return;
  };

  return (
    <div className="p-4 mb-4 cursor-pointer" onClick={navigateToIssueDetail}>
      <Title fontWeight="bold">{issue.title}</Title>
      <p className="text-gray-500">
        {new Date(issue.created_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </div>
  );
};
