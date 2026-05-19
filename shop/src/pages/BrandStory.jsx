function BrandStory() {
  return (
    <section className="bg-[#FAF3E7] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* 頁面標題 */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-[#C97A20]">
            StoryShop
          </p>

          <h2 className="text-3xl font-bold text-[#3A2A1A] md:text-4xl">
            品牌故事
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E9A23B]"></div>
        </div>

        {/* 主圖與簡介 */}
        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
              alt="StoryShop shoes"
              className="h-72 w-full object-cover md:h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold leading-relaxed text-[#3A2A1A]">
              每一雙鞋，
              <br />
              都有屬於你的故事
            </h3>

            <p className="mb-4 leading-8 text-[#6B4A2B]">
              StoryShop 不只是一個賣鞋的電商網站。我們相信，鞋子不只是穿在腳上的配件，
              而是陪你走過生活每一段路的夥伴。
            </p>

            <p className="leading-8 text-[#6B4A2B]">
              從第一次面試、第一次旅行，到每天通勤、上課與日常穿搭，
              每一雙鞋都記錄著你的選擇、風格與生活故事。
            </p>
          </div>
        </div>

        {/* 品牌緣由 */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-5 border-l-4 border-[#E9A23B] pl-4 text-2xl font-bold text-[#3A2A1A]">
            品牌緣由
          </h3>

          <div className="space-y-5 leading-8 text-[#6B4A2B]">
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

        {/* 三個特色 */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-3xl">01</div>
            <h4 className="mb-3 text-xl font-bold text-[#3A2A1A]">
              舒適好走
            </h4>
            <p className="text-sm leading-7 text-[#6B4A2B]">
              適合日常穿著，陪你走過通勤、上課、旅行與生活中的每一步。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-3xl">02</div>
            <h4 className="mb-3 text-xl font-bold text-[#3A2A1A]">
              風格百搭
            </h4>
            <p className="text-sm leading-7 text-[#6B4A2B]">
              從簡約休閒到街頭穿搭，讓鞋子自然融入你的日常風格。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-3xl">03</div>
            <h4 className="mb-3 text-xl font-bold text-[#3A2A1A]">
              用心選品
            </h4>
            <p className="text-sm leading-7 text-[#6B4A2B]">
              我們挑選實穿、好搭、有質感的鞋款，讓你更容易找到適合自己的選擇。
            </p>
          </div>
        </div>

        {/* 結尾標語 */}
        <div className="mt-10 rounded-2xl bg-[#E9A23B] px-6 py-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">
            穿上 StoryShop，走出你的故事。
          </h3>

          <p className="text-sm leading-7 text-white">
            你今天穿上的那雙鞋，也許就是下一段精彩旅程的起點。
          </p>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;