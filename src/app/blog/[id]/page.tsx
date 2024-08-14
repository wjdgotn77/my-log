import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { fetchIssue } from "@/hooks";

import { ThinDivider } from "@/components/common";

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const issue = await fetchIssue(params.id);

  return (
    <main className="max-w-screen-md h-fit m-auto px-5 py-5">
      <h1 className="text-4xl font-bold">{issue.title}</h1>
      <div className="flex gap-3 pt-5">
        <Link href={issue.user?.html_url || ""} target="_blank">
          @haesoo
        </Link>
        <p className="font-thin text-gray-500">
          {new Date(issue.created_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="flex gap-2 pt-3">
        {issue.labels.map((label) => {
          if (typeof label === "string") {
            return null;
          }
          return (
            <span
              key={label.id}
              className={`rounded-xl px-2 py-2`}
              style={{ backgroundColor: `#${label.color}` }}
            >
              {label.name}
            </span>
          );
        })}
      </div>
      <div className="pt-7" />
      <ThinDivider />
      <div className="pt-7" />
      <div className="mdx-content">
        <MDXRemote source={issue.body || ""} />
      </div>
    </main>
  );
}
