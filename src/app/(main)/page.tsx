import MainContents from "@/constants/MainContents";
import Image from "next/image";

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
      <div className="p-10 ">
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
      <div className="flex">
        <div className="px-8">
          <b>On This Page</b>목차목차목차
        </div>
        {/* 본문 */}
        <div className="grow from-linear-content1 to-linear-content3 bg-gradient-to-br text-white text-center p-12">
          <div className="mb-32">
            <h4>핵심 가치</h4>
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
          <div className="mb-32">
            <h4>커리큘럼</h4>
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
          <div className="mb-32">
            <h4>역대 활동</h4>
            <div className="flex justify-around my-12">
              {[1, 2, 3].map((item) => (
                <div className="relative">
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
                      <div className="text-gray-700">
                        12기 아이디어톤 : DeFi
                      </div>
                      <div className="text-brand-primary">{`상세보기 ->`}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
