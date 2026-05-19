import { Link } from "react-router-dom";

import login from "../assets/images/login.png";

function LoginPage() {
  return (
    <section className="min-h-screen bg-[#FAF3E7] px-4 py-12">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">
        <div className="hidden bg-[#E9A23B] p-10 text-white md:flex md:flex-col md:gap-8 lg:p-12">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-white/90">
              STORYSHOP MEMBER
            </p>

            <h1 className="mb-5 text-4xl font-black leading-tight lg:text-5xl">
              登入之後，
              <br />
              選鞋更快一點。
            </h1>

            <p className="max-w-md text-base leading-8 text-white/90">
              登入 StoryShop
              會員後，你可以更快找到喜歡的鞋款、整理收藏清單，並持續追蹤每一次下單與挑選紀錄。
            </p>
          </div>

          <div className="grid gap-3 text-sm md:grid-cols-2">
            <div className="rounded-2xl bg-white/14 px-4 py-4 backdrop-blur-sm">
              <p className="mb-2 font-bold text-white">快速收藏</p>
              <p className="leading-6 text-white/85">
                先留下喜歡的鞋款，之後回來比較更省時間。
              </p>
            </div>

            <div className="rounded-2xl bg-white/14 px-4 py-4 backdrop-blur-sm">
              <p className="mb-2 font-bold text-white">訂單追蹤</p>
              <p className="leading-6 text-white/85">
                重要進度一眼就能看到，不用反覆查找。
              </p>
            </div>

            <div className="rounded-2xl bg-white/14 px-4 py-4 backdrop-blur-sm md:col-span-2">
              <p className="mb-2 font-bold text-white">風格持續累積</p>
              <p className="leading-6 text-white/85">
                從日常百搭到個性穿搭，把你真正會回頭看的鞋款都留在同一個地方。
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/18">
            <img
              src={login}
              alt="StoryShop shoes"
              className="h-64 w-full object-cover lg:h-72"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold tracking-widest text-[#C97A20]">
              LOGIN
            </p>

            <h2 className="text-3xl font-bold text-[#3A2A1A]">會員登入</h2>

            <p className="mt-3 text-sm leading-6 text-[#6B4A2B]">
              登入你的 StoryShop 帳號，繼續探索適合你的鞋款。
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                電子郵件
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3A2A1A]">
                密碼
              </label>

              <input
                type="password"
                placeholder="請輸入你的密碼"
                className="w-full rounded-xl border border-[#E8D7BC] bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#E9A23B] focus:ring-2 focus:ring-[#E9A23B]/20"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[#6B4A2B]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#E8D7BC] accent-[#E9A23B]"
                />
                記住我
              </label>

              <a
                href="/forgot-password"
                className="text-sm font-semibold text-[#C97A20] hover:underline"
              >
                忘記密碼？
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#E9A23B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C97A20]"
            >
              登入
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6B4A2B]">
            還沒有帳號？
            <Link
              to="/RegisterPage"
              className="ml-1 font-semibold text-[#C97A20] hover:underline"
            >
              立即註冊
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
