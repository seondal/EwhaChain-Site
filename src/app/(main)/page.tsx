import Image from "next/image";
import Content from "./Content";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="flex">
        <div>
          <Image
            src="/image/banner.png"
            alt=""
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
            width={570}
            height={800}
          />
        </div>
        <div className="flex flex-col leading-normal justify-center px-20 from-linear-banner1 to-linear-banner2 bg-gradient-to-br grow text-white text-4xl font-semibold">
          <div>
            <div>Where Change Begins</div>
            <div>Where Chain Begins </div>
          </div>
          <div className="text-right">
            <div>We are Chainers</div>
            <div className="font-light text-3xl">
              Where we lead the industry
            </div>
          </div>
        </div>
      </div>
      {/* 학회 소개집 */}
      <div className="p-10">
        <div className="text-center text-ewhagreen text-2xl font-medium leading-normal">
          이화체인은
          <br />
          2018년 설립된 이화여자대학교 유일의 블록체인 학회입니다.
          <br />
          이화체인의 미션은 업계를 주도하는
          <br />
          차세대 블록체인 리더들의 커뮤니티를 구축하는 것입니다.
        </div>
        <div className="flex flex-col items-center gap-4 text-center py-9">
          <button className="bg-brand-silver text-brand-primary py-2 px-4 rounded-lg">
            {`학회소개집(Kor) 보러가기 ->`}
          </button>
          <button className="bg-brand-silver text-brand-primary py-2 px-4 rounded-lg">
            {`학회소개집(Eng) 보러가기 ->`}
          </button>
        </div>
      </div>
      <Content />
    </div>
  );
}
