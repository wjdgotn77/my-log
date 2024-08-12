"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const pathname = usePathname();

  const isCurrentRoute = (route: string) => {
    let tmpPathname = pathname;
    if (pathname.includes("/blog")) {
      tmpPathname = "/";
    }
    return tmpPathname === route;
  };

  return (
    <nav className="text-lg flex gap-3 py-3">
      <Link className="relative" href="/">
        Posts
        {isCurrentRoute("/") && (
          <div className="absolute end-px top-[4px] w-[12px] h-[12px] bg-lime-200 rounded-full z-[-1]" />
        )}
      </Link>

      <Link className="relative" href="/about">
        About me
        {isCurrentRoute("/about") && (
          <div className="absolute end-px top-[4px] w-[12px] h-[12px] bg-lime-200 rounded-full z-[-1]" />
        )}
      </Link>
    </nav>
  );
};
