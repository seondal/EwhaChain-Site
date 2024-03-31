"use client";

import Image from "next/image";
import MainContents from "@/constants/MainContents";
import { MutableRefObject, useRef } from "react";

const mock = [
  {
    year: 2023,
    list: [
      "Solana Grizzlython University Honorable Mentions",
      "2023 LBankLabs Summer Bootcamp Finalist",
      "국내 가상 자산 거래소 Korbit과 ‘ICE-CHAIN’ NFT 발행 행사 주최",
    ],
  },
  {
    year: 2022,
    list: [
      "HackAtom Seoul Juno Track 3rd Prize",
      "Polygon BUIDL IT: Summer 2022 Prize Pool",
      "Klaymakers22 DAO Track 2nd Prize",
    ],
  },
  {
    year: 2021,
    list: [
      "Solana Grizzlython University Honorable Mentions",
      "2023 LBankLabs Summer Bootcamp Finalist",
      "국내 가상 자산 거래소 Korbit과 ‘ICE-CHAIN’ NFT 발행 행사 주최",
    ],
  },
];

export default function Content() {
  const refValue = useRef(null);
  const refCurriculum = useRef(null);
  const refAcvitivy = useRef(null);
  const refResult = useRef(null);

  const scrollToSection = (ref: MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex">
      <div className="px-8 w-80 relative">
        {/* 목차 */}
        <div className="sticky top-16">
          <b>On This Page</b>
          <nav>
            <ul className="*:py-2 *:cursor-pointer">
              <li
                className="hover:text-brand-primary"
                onClick={() => scrollToSection(refValue)}>
                핵심 가치
              </li>
              <li
                className="hover:text-brand-primary"
                onClick={() => scrollToSection(refCurriculum)}>
                커리큘럼
              </li>
              <li
                className="hover:text-brand-primary"
                onClick={() => scrollToSection(refAcvitivy)}>
                역대 활동
              </li>
              <li
                className="hover:text-brand-primary"
                onClick={() => scrollToSection(refResult)}>
                성과 및 수상 내역
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* 본문 */}
      <div className="grow from-linear-content1 to-linear-content3 bg-gradient-to-br text-white text-center p-12">
        <div ref={refValue}>
          <h4 className="pt-16">핵심 가치</h4>
          <div className="flex justify-around my-12">
            {MainContents.value.map((item) => (
              <div
                key={item.keyword}
                className="flex flex-1 flex-col items-center gap-6">
                <div className="flex justify-center items-center bg-black text-brand-primary rounded-full size-36">
                  <div className="font-medium text-xl">{item.keyword}</div>
                </div>
                <div className="whitespace-pre-wrap">{item.explain}</div>
              </div>
            ))}
          </div>
        </div>
        <div ref={refCurriculum}>
          <h4 className="pt-16">커리큘럼</h4>
          <div className="flex flex-wrap gap-9 justify-center my-12">
            {MainContents.curriculum.map((item) => (
              <div
                key={item.keyword}
                className="flex flex-col items-center gap-2 py-4 bg-white rounded-md w-80">
                <div className="bg-brand-primary rounded-full size-10 p-2">
                  <Image src={item.icon} alt="" width={25} height={25} />
                </div>
                <div className="font-bold text-lg text-black">
                  {item.keyword}
                </div>
                <div className="text-sm text-gray-700 whitespace-pre-wrap">
                  {item.explain}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={refAcvitivy}>
          <h4 className="pt-16">역대 활동</h4>
          <div className="flex justify-around my-12">
            {[1, 2, 3].map((item) => (
              <div className="relative" key={item}>
                <div>
                  <Image
                    src="/image/dummy.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 flex justify-center mb-[-40px]">
                  <div
                    key={item}
                    className="flex flex-col justify-center gap-3 bg-white rounded-xl w-44 h-20 font-semibold">
                    <div className="text-gray-700">12기 아이디어톤 : DeFi</div>
                    <div className="text-brand-primary">{`상세보기 ->`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={refResult} className="flex flex-col items-center mb-32">
          <h4 className="pt-16">성과 및 수상 내역</h4>
          <div className="my-12">
            {mock.map((item) => (
              <div key={item.year} className="flex text-lg">
                <b className="w-12">{item.year}</b>
                <ul className="text-left border-l-2 pl-7 ml-7">
                  {item.list.map((content, idx) => (
                    <li key={idx}>{content}</li>
                  ))}
                  <br />
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
