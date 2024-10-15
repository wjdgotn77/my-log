"use client";

import { useRouter } from "next/navigation";
import { Inconsolata } from "next/font/google";

import { Title } from "../common";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["200", "400"] });

export const IssueItem = ({ issue }: { issue: Issue }) => {
  const router = useRouter();

  const navigateToIssueDetail = () => {
    router.push(`/blog/${issue.number}`);
    return;
  };

  return (
    <div className="p-4 mb-4 cursor-pointer" onClick={navigateToIssueDetail}>
      <Title fontWeight="bold">{issue.title}</Title>
      {/* <p className={`text-gray-500 ${inconsolata.className}`}>
        {new Date(issue.created_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p> */}
      <div className="flex gap-2 pt-3">
        {issue.labels.map((label) => {
          if (typeof label === "string") {
            return null;
          }
          return (
            <span
              key={label.id}
              className={`rounded-2xl px-3 py-1 text-sm text-center bg-slate-100 text-gray-500`}
            >
              {label.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};
