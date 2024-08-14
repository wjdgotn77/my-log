import Link from "next/link";

import { ThinDivider, Title } from "@/components/common";
import { Menu } from "@/components/common/menu";

export const Gnb = () => {
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
    <div className="max-w-screen-md h-full m-auto px-5">
      <div className="w-full flex items-center gap-3 py-5">
        <div className="w-full flex justify-between">
          <Title fontSize="2xl" fontWeight="bold">{`Haesoo's Blog`}</Title>
          <ul className="flex gap-3 font-thin">{renderLinks()}</ul>
        </div>
      </div>
      <Menu />
      <ThinDivider />
    </div>
  );
};
