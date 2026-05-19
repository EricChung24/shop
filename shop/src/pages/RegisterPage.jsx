import register  from "../assets/images/register.png";

function RegisterPage() {
  return (
    <section className="min-h-screen bg-[#FAF3E7] px-4 py-12">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">
        {/* 左側品牌區 */}
        <div className="hidden bg-[#E9A23B] p-10 md:flex md:flex-col md:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-white">
              StoryShop
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white">
              加入會員，
              <br />
              開始你的故事
            </h1>

            <p className="leading-8 text-white/90">
              註冊 StoryShop 會員，收藏你喜歡的鞋款，
              掌握新品上市、精選商品與專屬優惠。
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-white/20">
            <img
              src={register}
              alt="StoryShop shoes"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>

        {/* 右側表單區 */}
        <div className="p-6 md:p-10">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold tracking-widest text-[#C97A20]">
              REGISTER
            </p>

            <h2 className="text-3xl font-bold text-[#3A2A1A]">
              會員註冊
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#6B4A2B]">
              建立你的 StoryShop 帳號，開始探索適合你的鞋款。
            </p>
          </div>

          <form className="space-y-5">
            {/* 姓名 */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                姓名
              </label>
              <input
                type="text"
                placeholder="請輸入姓名"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                電子信箱
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            {/* 手機 */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                手機號碼
              </label>
              <input
                type="tel"
                placeholder="請輸入手機號碼"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            {/* 密碼 */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                密碼
              </label>
              <input
                type="password"
                placeholder="請輸入密碼"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            {/* 確認密碼 */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                確認密碼
              </label>
              <input
                type="password"
                placeholder="請再次輸入密碼"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            {/* 同意條款 */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-[#E8D7BC] accent-[#E9A23B]"
              />
              <p className="text-sm leading-6 text-[#6B4A2B]">
                我已閱讀並同意 StoryShop 的會員條款與隱私權政策。
              </p>
            </div>

            {/* 註冊按鈕 */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#E9A23B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C97A20]"
            >
              建立會員帳號
            </button>
          </form>

          {/* 登入提示 */}
          <p className="mt-6 text-center text-sm text-[#6B4A2B]">
            已經有帳號了？
            <a href="/LoginPage" className="ml-1 font-semibold text-[#C97A20] hover:underline">
              前往登入
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;