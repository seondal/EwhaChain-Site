import Image from "next/image";

export default function Home() {
  return (
    <div>
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
        <div className="flex flex-col *:leading-normal justify-center px-20 from-linear-banner1 to-linear-banner2 bg-gradient-to-br grow text-white text-4xl font-semibold">
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
      <div>학회 소개집</div>
      <div>내용</div>
    </div>
  );
}
