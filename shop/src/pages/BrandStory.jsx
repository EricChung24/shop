import storyImage from "../assets/images/story.png";

function BrandStory() {
  return (
    <div className="relative overflow-hidden bg-[#f7efe3]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-[#f2d7ab]/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-48 h-72 w-72 rounded-full bg-[#ddb17b]/30 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#fff7ec]/70 blur-3xl" />
      </div>

      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-4 inline-flex rounded-full border border-[#d9b98c] bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9a5b16] shadow-sm backdrop-blur">
              Editorial Feature
            </p>

            <p className="mb-3 text-sm font-semibold tracking-[0.4em] text-[#C97A20]">
              BrandStory
            </p>

            <h2 className="text-3xl font-black tracking-[0.12em] text-[#3A2A1A] md:text-5xl">
              品牌故事
            </h2>

            <div className="mx-auto mt-5 flex w-fit items-center gap-3">
              <span className="h-px w-10 bg-[#cfa06f]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#b8752d] bg-[#E9A23B]" />
              <span className="h-px w-20 bg-[#cfa06f]" />
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(90,56,24,0.12)] backdrop-blur md:grid-cols-2 md:p-8">
          <div className="relative overflow-hidden rounded-[28px] border border-[#ead7bc] bg-[#f4eadb] p-2">
            <div className="absolute left-5 top-5 z-10 rounded-full bg-[#2f241a]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f8efe0]">
              Issue 01
            </div>

            <img
              src={storyImage}
              alt="StoryShop shoes"
              className="h-72 w-full rounded-[22px] object-cover transition duration-500 hover:scale-[1.03] md:h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b8752d]">
              Brand Editorial
            </p>

            <h3 className="mb-5 text-2xl font-black leading-relaxed text-[#3A2A1A] md:text-[2rem]">
              每一雙鞋，
              <br />
              都有屬於你的故事
            </h3>

            <div className="mb-5 h-px w-16 bg-[#d4aa78]" />

            <p className="mb-4 text-[15px] leading-8 text-[#6B4A2B]">
              StoryShop
              不只是一個賣鞋的電商網站。我們相信，鞋子不只是穿在腳上的配件，
              而是陪你走過生活每一段路的夥伴。
            </p>

            <p className="text-[15px] leading-8 text-[#6B4A2B]">
              從第一次面試、第一次旅行，到每天通勤、上課與日常穿搭，
              每一雙鞋都記錄著你的選擇、風格與生活故事。
            </p>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[30px] border border-[#eadcc8] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(250,241,227,0.92))] p-6 shadow-[0_18px_60px_rgba(90,56,24,0.08)] md:p-8">
          <div className="pointer-events-none absolute right-6 top-0 text-[7rem] font-black leading-none text-[#ebd3b1]/50">
            "
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#b8752d]">
            Founding Note
          </p>

          <h3 className="mb-5 flex items-center gap-4 text-2xl font-black text-[#3A2A1A]">
            <span className="h-10 w-1 rounded-full bg-[#E9A23B]" />
            品牌緣由
          </h3>

          <div className="space-y-5 text-[15px] leading-8 text-[#6B4A2B]">
            <p>
              我們創立 StoryShop，是希望每個人都能在這裡找到適合自己的鞋。
              不論你喜歡簡約百搭、街頭潮流、休閒舒適，或是具有設計感的款式，
              我們都用心挑選每一雙鞋。
            </p>

            <p>
              在 StoryShop，我們重視的不只是外型，更重視穿著的舒適度、
              實用性與搭配性。因為我們知道，一雙好鞋不只要好看，
              更要能陪你走得更遠。
            </p>

            <p className="font-semibold text-[#3A2A1A]">
              StoryShop 代表的不只是購物，而是一段從「選擇」開始的故事。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="group rounded-[28px] border border-[#eadcc8] bg-white/85 p-6 shadow-[0_14px_40px_rgba(90,56,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(90,56,24,0.14)]">
            <div className="mb-5 flex items-center justify-between border-b border-[#ead7bc] pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8752d]">
                Chapter
              </span>
              <span className="text-4xl font-black italic text-[#dfbe91] transition duration-300 group-hover:text-[#b8752d]">
                01
              </span>
            </div>

            <h4 className="mb-3 text-xl font-black text-[#3A2A1A]">舒適好走</h4>

            <p className="text-sm leading-7 text-[#6B4A2B]">
              適合日常穿著，陪你走過通勤、上課、旅行與生活中的每一步。
            </p>
          </div>

          <div className="group rounded-[28px] border border-[#eadcc8] bg-white/85 p-6 shadow-[0_14px_40px_rgba(90,56,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(90,56,24,0.14)]">
            <div className="mb-5 flex items-center justify-between border-b border-[#ead7bc] pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8752d]">
                Chapter
              </span>
              <span className="text-4xl font-black italic text-[#dfbe91] transition duration-300 group-hover:text-[#b8752d]">
                02
              </span>
            </div>

            <h4 className="mb-3 text-xl font-black text-[#3A2A1A]">風格百搭</h4>

            <p className="text-sm leading-7 text-[#6B4A2B]">
              從簡約休閒到街頭穿搭，讓鞋子自然融入你的日常風格。
            </p>
          </div>

          <div className="group rounded-[28px] border border-[#eadcc8] bg-white/85 p-6 shadow-[0_14px_40px_rgba(90,56,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(90,56,24,0.14)]">
            <div className="mb-5 flex items-center justify-between border-b border-[#ead7bc] pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8752d]">
                Chapter
              </span>
              <span className="text-4xl font-black italic text-[#dfbe91] transition duration-300 group-hover:text-[#b8752d]">
                03
              </span>
            </div>

            <h4 className="mb-3 text-xl font-black text-[#3A2A1A]">用心選品</h4>

            <p className="text-sm leading-7 text-[#6B4A2B]">
              我們挑選實穿、好搭、有質感的鞋款，讓你更容易找到適合自己的選擇。
            </p>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[32px] border border-[#d08a2f] bg-[linear-gradient(135deg,#d9912f_0%,#b96a21_45%,#8f4f18_100%)] px-6 py-8 text-center shadow-[0_24px_70px_rgba(144,86,28,0.28)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
          <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 rounded-full border border-white/10" />

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Closing Statement
          </p>

          <h3 className="mb-3 text-2xl font-black text-white md:text-3xl">
            穿上 StoryShop，走出你的故事。
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/90">
            你今天穿上的那雙鞋，也許就是下一段精彩旅程的起點。
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrandStory;
