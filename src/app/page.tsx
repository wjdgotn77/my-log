import Image from "next/image";

import { fetchIssueList } from "@/hooks";

import { ThinDivider, Title } from "@/components/common";
import { IssueList } from "@/components/blog";
import Link from "next/link";

export default async function Home() {
  const issueList = await fetchIssueList();

  const renderLinks = () => {
    const links = [
      {
        href: "https://github.com/wjdgotn77",
        label: "Github",
        target: "_blank",
      },
      {
        href: "https://www.linkedin.com/in/haesoo-j-3b0ba4216/",
        label: "LinkedIn",
        target: "_blank",
      },
      {
        href: "https://www.instagram.com/haesoojip/",
        label: "Instagram",
        target: "_blank",
      },
    ];

    return links.map((link, index) => (
      <li key={index}>
        <Link href={link.href} target={link.target}>
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <main className="max-w-screen-lg m-auto px-5">
      <div className="flex items-center gap-3 py-5">
        <Image
          className="rounded-full"
          src={issueList[0].user?.avatar_url || ""}
          width={100}
          height={100}
          alt="avatar"
        />
        <div>
          <Title>{`Haesoo's Blog`}</Title>
          <ul className="flex gap-3 pt-3">{renderLinks()}</ul>
        </div>
      </div>
      <ThinDivider />
      <IssueList issueList={issueList} />
    </main>
  );
}
