import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import {
  buildMarqueeProducts,
  normalizeProductsResponse,
} from "../utils/marqueeProducts";

const TOKEN = import.meta.env.VITE_API_TOKEN;
const API_BASE_URL = "http://localhost:5000";
const PRODUCTS_API_URL = `${API_BASE_URL}/api/products`;

function Home() {
  const [hotProducts, setHotProducts] = useState([]);
  const [hotProductsLoading, setHotProductsLoading] = useState(true);
  const [hotProductsError, setHotProductsError] = useState("");

  const products = [
    {
      id: 1,
      name: "Monoverse",
      price: "NT$3,600",
      image: p1,
    },
    {
      id: 2,
      name: "PLATFORM 404",
      price: "NT$2,600",
      image: p2,
    },
    {
      id: 3,
      name: "high step",
      price: "NT$4,000",
      image: p3,
    },
    {
      id: 4,
      name: "Urban Step",
      price: "NT$3,200",
      image: p4,
    },
  ];

  useEffect(() => {
    const fetchHotProducts = async () => {
      try {
        setHotProductsLoading(true);

        const response = await axios.get(PRODUCTS_API_URL, {
          headers: {
            Authorization: TOKEN,
          },
          timeout: 10000,
        });

        const productList = normalizeProductsResponse(response.data);

        setHotProducts(productList.slice(0, 8));
        setHotProductsError("");
      } catch (error) {
        setHotProductsError(error.message || "讀取熱銷商品失敗");
      } finally {
        setHotProductsLoading(false);
      }
    };

    fetchHotProducts();
  }, []);

  const marqueeProducts = buildMarqueeProducts(hotProducts);

  return (
    <>
      <div
        className="relative mb-12 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h2 className="relative bottom-20 right-60 text-5xl font-bold text-white">
          Your Step, Your Statement
        </h2>
        <button
          type="button"
          style={{ cursor: "pointer" }}
          className="relative right-200 top-0 mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-extrabold text-black hover:bg-yellow-300"
        >
          立即選購
        </button>
      </div>

      <h2 className="mb-4 text-center text-6xl font-bold">New Arrival</h2>
      <p className="text-center text-4xl">新品上市</p>

      <section className="mb-20 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {products.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-3 w-full object-cover"
                />
                <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-700">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-8 text-[#f3efe8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-8 h-56 w-56 rounded-full bg-[#c9a36a]/8 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-64 w-64 rounded-full bg-[#c9a36a]/6 blur-3xl" />
          <div className="absolute bottom-[-4rem] left-1/3 h-52 w-52 rounded-full bg-white/3 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a36a]">
                Best Sellers
              </p>
              <h2 className="text-4xl font-bold text-[#f8f5ef]">熱銷商品</h2>
            </div>
          </div>

          {hotProductsLoading && (
            <div className="rounded-3xl border border-white/10 bg-white/95 px-6 py-12 text-center text-lg text-gray-500 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              載入熱銷商品中...
            </div>
          )}

          {!hotProductsLoading && hotProductsError && (
            <div className="rounded-3xl border border-white/10 bg-white/95 px-6 py-12 text-center text-lg text-red-500 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              讀取熱銷商品失敗：{hotProductsError}
            </div>
          )}

          {!hotProductsLoading && !hotProductsError && hotProducts.length > 0 && (
            <div className="space-y-6">
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black via-black/88 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black via-black/88 to-transparent" />

                <div className="overflow-hidden">
                  <div className="home-hot-marquee-track flex gap-6 py-2">
                    {marqueeProducts.map((product, index) => {
                      const imageSrc = product.imageUrl
                        ? `${API_BASE_URL}${product.imageUrl}`
                        : product.image || "https://via.placeholder.com/300";

                      return (
                        <article
                          key={`${product.id}-${index}`}
                          className="w-[236px] shrink-0 overflow-hidden rounded-[22px] border border-black/5 bg-[#fdfbf8] shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(0,0,0,0.2)]"
                        >
                          <div className="relative h-[240px] overflow-hidden bg-[#f1ece4]">
                            <div className="absolute left-4 top-4 z-10 rounded-full border border-[#d9c3a3] bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8c6a3f] backdrop-blur">
                              Hot Pick
                            </div>
                            <img
                              src={imageSrc}
                              alt={product.title || product.name || "商品圖片"}
                              className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                            />
                          </div>

                          <div className="space-y-3 p-4">
                            <div className="space-y-2">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a98a61]">
                                StoryShop Selection
                              </p>

                              <h3 className="line-clamp-2 min-h-12 text-[1.05rem] font-bold leading-6 text-[#1f1a17]">
                                {product.title || product.name}
                              </h3>
                            </div>

                            <p className="line-clamp-2 min-h-10 text-sm leading-6 text-[#6d635a]">
                              {product.description ||
                                "精選鞋款，兼顧風格、舒適與日常搭配。"}
                            </p>

                            <div className="flex items-end justify-between border-t border-[#ece3d7] pt-3">
                              <div className="space-y-1">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9f8d76]">
                                  Price
                                </p>
                                <p className="text-2xl font-bold text-[#b7792f]">
                                  NT$ {product.price || product.origin_price || 0}
                                </p>
                              </div>

                              <span className="rounded-full bg-[#f3eadf] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6d5840]">
                                Edit
                              </span>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-5 text-center backdrop-blur-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#c9a36a]">
                  Ready To Shop
                </p>
                <h3 className="text-2xl font-bold text-[#f8f5ef] md:text-3xl">
                  現在熱賣的，不一定會等你
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/72">
                  從日常百搭到風格鞋款，先把大家正在看的款式挑出來。下一雙，直接從這裡開始。
                </p>
                <Link
                  to="/products"
                  className="mt-5 inline-flex rounded-full border border-[#c9a36a] px-5 py-2 text-sm font-semibold text-[#f8f5ef] transition hover:bg-[#c9a36a] hover:text-black"
                >
                  立即逛熱銷
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
