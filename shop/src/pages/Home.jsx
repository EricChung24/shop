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
  //首頁產品圖                                                                                                                                                                                                                                                                                   
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
<div className="mb-8 px-6 text-center">
      
              <p className="mb-3 text-xl font-semibold tracking-[0.4em] text-[#C97A20]">
              New Arrivals
            </p>
            <h2 className="text-3xl font-black tracking-[0.12em] text-[#3A2A1A] md:text-5xl">
              新品上市
            </h2>
             <div className="mx-auto mt-5 flex w-fit items-center gap-3">
              <span className="h-px w-10 bg-[#cfa06f]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#b8752d] bg-[#E9A23B]" />
              <span className="h-px w-20 bg-[#cfa06f]" />
            </div>
</div>
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

      <section className="relative overflow-hidden bg-[#FAF3E7] py-8 text-[#2d2218]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-8 h-56 w-56 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-64 w-64 rounded-full bg-[#f1dfc5]/70 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#b7792f]">
              Best Sellers
            </p>
            <h2 className="text-4xl font-bold text-[#2d2218]">熱銷商品</h2>
          </div>

          {hotProductsLoading && (
            <div className="rounded-3xl border border-[#eadfcf] bg-white px-6 py-12 text-center text-lg text-gray-500 shadow-[0_12px_30px_rgba(84,58,32,0.08)]">
              載入熱銷商品中...
            </div>
          )}

          {!hotProductsLoading && hotProductsError && (
            <div className="rounded-3xl border border-[#eadfcf] bg-white px-6 py-12 text-center text-lg text-red-500 shadow-[0_12px_30px_rgba(84,58,32,0.08)]">
              讀取熱銷商品失敗：{hotProductsError}
            </div>
          )}

          {!hotProductsLoading && !hotProductsError && hotProducts.length > 0 && (
            <div className="space-y-6">
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#FAF3E7] via-[#FAF3E7]/90 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#FAF3E7] via-[#FAF3E7]/90 to-transparent" />

                <div className="overflow-hidden">
                  <div className="home-hot-marquee-track flex gap-6 py-2">
                    {marqueeProducts.map((product, index) => {
                      const imageSrc = product.imageUrl
                        ? `${API_BASE_URL}${product.imageUrl}`
                        : product.image || "https://via.placeholder.com/300";

                    return (
                      <article
                        key={`${product.id}-${index}`}
                        className="w-[236px] shrink-0 overflow-hidden rounded-[22px] border border-[#eadfcf] bg-[#fdfbf8] shadow-[0_14px_32px_rgba(84,58,32,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(84,58,32,0.18)]"
                      >
                        <div className="relative h-[240px] overflow-hidden bg-[#f1ece4]">
                          <img
                            src={imageSrc}
                            alt={product.title || product.name || "商品圖片"}
                            className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                          />
                        </div>
                      </article>
                    );
                  })}
                  </div>
                </div>
              </div>

             
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
