import { FiArrowUpRight } from "react-icons/fi";

function BrandStory() {
  return (
    <div className="w-full mx-auto font-['Noto_Sans_TC']">
      {/* Hero */}
      <section className="relative mb-[84px] overflow-hidden">
        <img
          className="w-full max-w-full inline-block opacity-60"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week1/hero.png?raw=true"
          alt="品牌故事主視覺"
        />

        {/* 讓背景更柔和的白色遮罩 */}
        <div className="absolute inset-0 bg-white/30"></div>

        {/* Hero Title */}
        <div className="absolute top-[43.8%] left-1/2 -translate-x-1/2 -translate-y-1/2 mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#d9b98c] bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9a5b16] shadow-sm backdrop-blur">
            Brand Story
          </p>

          <p className="mb-3 text-sm font-semibold tracking-[0.4em] text-[#663803]">
            StoryShop
          </p>

          <h2 className="text-3xl font-black tracking-[0.12em] text-[#000000] md:text-5xl">
            品牌故事
          </h2>

          <div className="mx-auto mt-5 flex w-fit items-center gap-3">
            <span className="h-px w-10 bg-[#cfa06f]" />
            <span className="h-2.5 w-2.5 rounded-full border border-[#b8752d] bg-[#E9A23B]" />
            <span className="h-px w-20 bg-[#cfa06f]" />
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="flex flex-col justify-center items-center text-center mb-[84px]">
        <h5 className="text-[#57A203] font-bold leading-[1.2] text-[35px] mb-[15px]">
          走出城市的節奏，穿上自己的步調。
        </h5>

        <p className="mt-[6px] text-[20px] leading-[1.5] font-normal tracking-[0.05em]">
          我們相信，每一雙鞋都該帶著個性出場。
        </p>

        <p className="mt-[6px] text-[20px] leading-[1.5] font-normal tracking-[0.05em]">
          在 StoryShop，我們認為鞋履不只是穿戴飾品，更是你與世界連結的語言。
        </p>

        <p className="mt-[6px] text-[20px] leading-[1.5] font-normal tracking-[0.05em]">
          融合城市結構與機能語彙，我們打造適合都會節奏的風格鞋款，陪你自信穿梭每一場風景。
        </p>
      </section>

      {/* Brand Image */}
      <section className="flex justify-center items-center h-screen">
        <img
          className="h-[717px] w-[1076px] max-w-full object-cover rounded-[10px]"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-week1/about.png?raw=true"
          alt="品牌介紹圖片"
        />
      </section>

      {/* Main Content */}
      <section className="w-[856px] mx-auto text-left">
        {/* 品牌簡介 */}
        <h4 className="text-[28px] font-bold leading-[1.2] mb-[30px] mt-[48px]">
          品牌簡介
        </h4>

        <p className="mb-[22px] text-[20px] font-bold leading-[1.5] text-[#57A203] tracking-[0.05em]">
          StoryShop 是來自台灣的街頭機能鞋品牌，致力於打造「風格與功能並存」的鞋履體驗。
        </p>

        <p className="mb-[16px] text-[16px] leading-[1.5] font-normal tracking-[0.05em]">
          在城市與日常的交錯中，我們看見了步伐的力量。StoryShop
          誕生於一群設計師與文化觀察者的交會點——一個相信風格應該來自「真實場景」而非伸展台的團隊。從都市的清晨街角，到午後光影灑落的人行道，我們捕捉的是那些不被刻意編排的時刻，那些用一雙鞋踏出的態度與節奏。每一款鞋的誕生，不只是設計與工藝的結晶，更是一段來自城市靈感的延伸，我們相信：鞋，是穿在腳上的語言。
        </p>

        <p className="mb-[100px] text-[16px] leading-[1.5] font-normal tracking-[0.05em]">
          StoryShop 的名字來自 Story +
          shoe，代表著我們對每一個走進城市生活的人致敬。我們不追逐潮流，我們關注輪廓、材質、穿著者的心境與身型，創造能陪伴你走進自我節奏的經典之作。選用高品質麂皮、織物與天然橡膠大底，並與獨立插畫家、攝影師合作，打造具有街頭詩意的形象風格。StoryShop
          相信，美不是炫耀，而是由內而外的呼吸——一雙鞋，剛好說出你心中的樣子。
        </p>

        {/* 品牌歷程 */}
        <h4 className="text-[28px] font-bold leading-[1.2] mb-[30px]">
          品牌歷程
        </h4>

        <ul className="list-none pl-0 mt-[1px] mb-[100px]">
          <li className="relative pl-[20px] mb-[16px] text-[16px] tracking-[0.05em] leading-[1.2] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-[17px]">
            2019｜StoryShop 在台北東區的創意工作室誕生。
          </li>

          <li className="relative pl-[20px] mb-[16px] text-[16px] tracking-[0.05em] leading-[1.2] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-[17px]">
            2021｜首款【Urban Flow 系列】誕生，結合針織鞋面與城市靈感。
          </li>

          <li className="relative pl-[20px] mb-[16px] text-[16px] tracking-[0.05em] leading-[1.2] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-[17px]">
            2025｜StoryShop 已成為台灣街頭生活風格的代表鞋履品牌之一。
          </li>
        </ul>

        {/* 品牌理念 */}
        <h4 className="text-[28px] font-bold leading-[1.2] mt-[16px] mb-[30px]">
          品牌理念
        </h4>

        <section>
          <p className="mb-[24px] indent-[10px] text-[16px] leading-[1.5] font-normal tracking-[0.05em]">
            機能先行：輕量、透氣、防潑水
          </p>

          <p className="mb-[24px] indent-[10px] text-[16px] leading-[1.5] font-normal tracking-[0.05em]">
            美學延伸：極簡線條 + 實驗配色
          </p>

          <p className="mb-[100px] indent-[10px] text-[16px] leading-[1.5] font-normal tracking-[0.05em]">
            永續材料：選用環保合成皮革與可回收包裝
          </p>
        </section>

        {/* 品牌小故事 */}
        <h4 className="text-[24px] font-bold leading-[1.2] mt-[16px] mb-[30px]">
          品牌小故事
        </h4>

        <section>
          <p className="flex items-center gap-1 text-[#57A203] tracking-[0.05em] mb-[1em]">
            <FiArrowUpRight className="text-[20px]" />

            <span className="inline-block underline decoration-[#57A203] underline-offset-[8px] decoration-[1px] pb-[6px] tracking-[0.05em]">
              創辦人筆記：我們為什麼想做鞋？
            </span>
          </p>

          <p className="flex items-center gap-1 text-[#57A203] tracking-[0.05em] mb-[1em]">
            <FiArrowUpRight className="text-[20px]" />

            <span className="inline-block underline decoration-[#57A203] underline-offset-[8px] decoration-[1px] pb-[6px] tracking-[0.05em]">
              穿上 StoryShop 的他們
            </span>
          </p>

          <p className="flex items-center gap-1 text-[#57A203] tracking-[0.05em] mb-[121px]">
            <FiArrowUpRight className="text-[20px]" />

            <span className="inline-block underline decoration-[#57A203] underline-offset-[8px] decoration-[1px] pb-[6px] tracking-[0.05em]">
              StoryShop 鞋履的誕生過程
            </span>
          </p>
        </section>
      </section>

      {/* Footer */}
      <footer>
        <section className="text-center pt-[64px] pb-[64px] px-[312px]">
          <p className="text-[#6C757D] tracking-[0.05em] text-[14px] leading-[1.5] font-normal block">
            Copyright ©2026 StoryShop. All rights reserved.
          </p>

          <p className="text-[#6C757D] tracking-[0.05em] text-[14px] leading-[1.5] font-normal block">
            All Rights Reserved.
          </p>
        </section>
      </footer>
    </div>
  );
}

export default BrandStory;