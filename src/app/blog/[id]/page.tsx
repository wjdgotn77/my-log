import { ThinDivider, Title } from "@/components/common";
import { fetchIssue } from "@/hooks";

import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const issue = await fetchIssue(params.id);

  return (
    <main className=" max-w-lg m-auto py-5">
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
      <div className="pt-3">
        {issue.labels.map((label) => (
          <span
            key={(label as { id?: number }).id}
            className="bg-gray-100 rounded-lg px-2 py-2"
          >
            {(label as { name: string }).name}
          </span>
        ))}
      </div>
      <div className="pt-7" />
      <ThinDivider />
      <MDXRemote source={issue.body || ""} />
    </main>
  );
}
