import { BsGithub, BsInstagram, BsEnvelopeFill } from "react-icons/bs";
import { SiHugo } from "react-icons/si";

function Footer() {
  return (
    <footer className="mt-5 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          {/* Website Story / About */}
          <div>
            <a
              href="/"
              className="mb-2 inline-block text-2xl font-bold text-white no-underline"
            >
              StoryShop
            </a>

            <br />

            <a
              href="/pages/story.html"
              className="inline-flex items-center gap-2 text-neutral-200 no-underline"
            >
              <span className="mb-2">網站故事 / 品牌故事</span>
            </a>

            <p className="mt-2">你的每一步，都值得被認真對待</p>
            <p>StoryShop，我們想和你一起，把平凡的日子走成喜歡的樣子。</p>
          </div>

          {/* My Contact */}
          <div>
            <p className="mt-1 font-semibold">聯絡作者:</p>

            <div className="mt-2 flex flex-col gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/EricChung24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="mb-2 inline-flex items-center gap-2 text-white no-underline"
              >
                <BsGithub className="text-lg" />
                <span className="text-neutral-200">EricChung24</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ericchung1024/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 text-white no-underline"
              >
                <BsInstagram className="text-lg" />
                <span className="mb-2 text-neutral-200">EricChung1024</span>
              </a>

              {/* Gmail */}
              <a
                href="mailto:ericchung9139@gmail.com"
                aria-label="Gmail"
                className="inline-flex items-center gap-2 text-white no-underline"
              >
                <BsEnvelopeFill className="text-lg" />
                <span className="mb-2 text-neutral-200">
                  ericchung9139@gmail.com
                </span>
              </a>

              {/* Hugo Blog */}
              <a
                href="https://ericchung24.github.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hugo Blog"
                className="inline-flex flex-wrap items-center gap-2 text-white no-underline"
              >
                <SiHugo className="text-lg" />
                <span className="text-neutral-200">EricChung的程式勇者村</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-3 border-neutral-700" />

        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <small className="text-base text-neutral-200">
            © {new Date().getFullYear()} StoryShop. 本網站為作品展示用，非商業用途。
          </small>

          <div className="flex gap-3">
            <a
              href="/pages/privacy.html"
              className="text-neutral-200 no-underline"
            >
              隱私權政策
            </a>
            <a
              href="/pages/terms.html"
              className="text-neutral-200 no-underline"
            >
              服務條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;