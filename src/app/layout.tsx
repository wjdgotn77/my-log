import type { Metadata } from "next";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Gothic_A1 } from "next/font/google";

import { domain } from "@/variables/constants";

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
  alternates: {
    types: {
      "application/rss+xml": `${domain}rss.xml`,
    },
  },
  openGraph: {
    title: "haesoo's blog",
    description:
      "안녕하세요, 식물을 키우고 요리하는 것을 좋아하며 늘 살아보고 싶었던 서촌에서 지내고 있는 프론트엔드 개발자 정해수입니다. 이곳에서는 개인적인 생각을 정리하고, 프로젝트를 통해 얻은 것을 기록하면서 지금까지의 여정을 돌아보고 앞으로 나아가는 과정을 적어보려 합니다. 또 이를 통해 인생을 제대로 살아보기 위한 고민들을 솔직하게 정리합니다.",
    images: `${domain}_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_9966.b418503d.jpg&w=1920&q=75`,
    url: domain,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.GTM_ID || ""} />
      <GoogleAnalytics gaId={process.env.GA_ID || ""} />
      <body className={gothicA1.className}>
        <Gnb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
