import Link from "next/link";
import Image from "next/image";

import { fetchIssueList } from "@/hooks";

import { ThinDivider } from "@/components/common";

import aboutSrc from "../../../public/IMG_9966.jpg";

export default async function AboutPage() {
  const issueList = await fetchIssueList();

  return (
    <main className="max-w-screen-md m-auto px-5 py-10 w-full whitespace-pre-wrap">
      <section className="w-full pb-8">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-3xl font-bold pb-5">About Me</h1>
            <p className="text-xl font-semibold">Haesoo Cheong</p>
            <p className="text-lg font-thin text-gray-600">
              Frontend Developer Based in Seoul, South Korea
            </p>
          </div>
          <div className="relative max-[544px]:hidden w-[120px] aspect-square">
            <Image
              className="rounded-full"
              src={issueList[0].user?.avatar_url || ""}
              fill
              alt="avatar"
            />
          </div>
        </div>
        <br />
        <div className="relative w-full h-[400px]">
          <Image
            className="rounded-xl shadow-lg"
            src={aboutSrc}
            fill
            objectFit="cover"
            alt="kimbab"
          />
        </div>
        <p className="pt-5">
          {`안녕하세요, 식물을 키우고 요리하는 것을 좋아하며 늘 살아보고 싶었던 서촌에서 지내고 있는 프론트엔드 개발자 정해수입니다. 이곳에서는 개인적인 생각을 정리하고, 프로젝트를 통해 얻은 것을 기록하면서 지금까지의 여정을 돌아보고 앞으로 나아가는 과정을 적어보려 합니다. 또 이를 통해 인생을 제대로 살아보기 위한 고민들을 솔직하게 정리합니다.\n제가 궁금하시다면 커피챗 대환영 입니다!`}
        </p>
        <p className="flex gap-3 pt-3">
          <Link
            href="mailto:wjdgotn77@gmail.com"
            className="hover:text-blue-600 underline font-thin"
          >
            @email
          </Link>
          <Link
            href="https://www.linkedin.com/in/haesoo-j-3b0ba4216/"
            className="hover:text-blue-600 underline font-thin"
            target="_blank"
          >
            @linkedin
          </Link>
          <Link
            href="https://www.instagram.com/haesoojip/"
            className="hover:text-blue-600 underline font-thin"
            target="_blank"
          >
            @instagram
          </Link>
        </p>
      </section>
      <ThinDivider />
      <section className="w-full pt-8 pb-6">
        <h2 className="text-xl font-bold pb-3">Education</h2>
        <p>
          동국대학교 문화예술대학원 예술치료학과 미술치료전공{" "}
          <span className="font-thin">(2017.03 - 2020.07)</span>
        </p>
        <p>
          경기대학교 서양화학과{" "}
          <span className="font-thin">(2013.03 - 2017.02)</span>
        </p>
      </section>
      <section className="w-full py-6">
        <h2 className="text-xl font-bold py-3">Work Experience</h2>
        <ul>
          <li>
            <p>
              (주)모노랩스{" "}
              <span className="font-thin">(2022.05.09 - 2024.08.12)</span>
            </p>
            <p className="text-gray-700">
              - 맞춤 영양제 정기 구독 서비스 IAM 의 프론트엔드 개발
            </p>
          </li>
        </ul>
      </section>
      <section className="w-full py-6">
        <h2 className="text-xl font-bold py-3">주요 프로젝트</h2>
        <ul>
          <li className="text-lg text-gray-600">추후 업데이트</li>
        </ul>
      </section>
    </main>
  );
}
