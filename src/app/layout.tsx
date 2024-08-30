import type { Metadata } from "next";

import { Gothic_A1 } from "next/font/google";

import { Footer } from "@/components/common/footer";
import { Gnb } from "@/components/common/gnb";

import "./globals.css";

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "haesoo's blog",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gothicA1.className}>
        <Gnb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
