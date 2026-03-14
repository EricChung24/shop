import { FiShoppingCart } from "react-icons/fi";

function ProductList() {
  const categories = [
    "所有商品",
    "慢跑鞋",
    "滑板鞋",
    "厚底鞋",
    "限定 / 聯名企劃",
  ];

  const productsData = [
    {
      title: "PLATFORM 404",
      category: "滑板鞋",
      origin_price: 4200,
      price: 3280,
      unit: "雙",
      description: "厚底街頭風格鞋款",
      content: "結合份量感外型與日常穿搭，適合喜歡個性輪廓的人。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product.png",
      ],
    },
    {
      title: "Urban Drift",
      category: "慢跑鞋",
      origin_price: 3980,
      price: 2990,
      unit: "雙",
      description: "城市機能休閒鞋",
      content: "適合日常通勤與休閒穿搭，兼具舒適度與造型感。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-1.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-1.png",
      ],
    },
    {
      title: "Mono Pulse",
      category: "慢跑鞋",
      origin_price: 3600,
      price: 2780,
      unit: "雙",
      description: "極簡潮流鞋款",
      content: "用簡潔線條打造現代感，適合偏好俐落風格的穿搭。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-2.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-2.png",
      ],
    },
    {
      title: "Neon Route",
      category: "慢跑鞋",
      origin_price: 4100,
      price: 3150,
      unit: "雙",
      description: "未來感街頭鞋款",
      content: "設計靈感來自夜間街景，適合喜歡科技感輪廓的搭配。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-3.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-3.png",
      ],
    },
    {
      title: "Shadow Grid",
      category: "厚底鞋",
      origin_price: 3850,
      price: 2890,
      unit: "雙",
      description: "暗黑機能鞋款",
      content: "低調但有層次，適合街頭、工裝與黑灰系穿搭。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-4.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-4.png",
      ],
    },
    {
      title: "Echo Runner",
      category: "厚底鞋",
      origin_price: 4300,
      price: 3390,
      unit: "雙",
      description: "運動混搭鞋款",
      content: "融合跑鞋靈感與潮流設計，兼顧輕盈腳感與外型。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-5.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-5.png",
      ],
    },
    {
      title: "Static Wave",
      category: "厚底鞋",
      origin_price: 3900,
      price: 3050,
      unit: "雙",
      description: "潮流輪廓鞋款",
      content: "強調中底與鞋身比例，穿出視覺存在感。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-6.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-6.png",
      ],
    },
    {
      title: "Pixel Motion",
      category: "厚底鞋",
      origin_price: 3750,
      price: 2860,
      unit: "雙",
      description: "數位感休閒鞋",
      content: "名稱帶有像素感，風格偏向年輕與輕量化搭配。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-7.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-7.png",
      ],
    },
    {
      title: "Volt Step",
      category: "厚底鞋",
      origin_price: 4050,
      price: 3180,
      unit: "雙",
      description: "俐落機能鞋款",
      content: "帶有速度感與流線輪廓，適合乾淨俐落的搭配方式。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-8.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-8.png",
      ],
    },
    {
      title: "Rift Core",
      category: "厚底鞋",
      origin_price: 4400,
      price: 3480,
      unit: "雙",
      description: "高辨識度潮流鞋款",
      content: "造型感強烈，適合想讓整體穿搭更有重點的人。",
      is_enabled: 1,
      imageUrl:
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-9.png",
      imagesUrl: [
        "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-9.png",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* 麵包屑 */}
      <nav className="mb-8 flex items-center text-sm text-gray-500">
        <span className="cursor-pointer transition hover:text-black">首頁</span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="cursor-pointer transition hover:text-black">女鞋</span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="font-medium text-gray-900">所有商品</span>
      </nav>

      {/* 主內容 */}
      <div className="grid grid-cols-12 gap-10">
        {/* 左邊分類 */}
        <aside className="col-span-2">
          <h2 className="mb-6 text-2xl font-bold tracking-wide text-gray-900">
            女鞋
          </h2>

          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className={`relative text-left text-base transition ${
                    index === 0
                      ? "font-bold text-yellow-500"
                      : "text-gray-700 hover:text-yellow-500"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* 右邊商品區 */}
        <section className="col-span-10">
          <div className="grid grid-cols-3 gap-8">
            {productsData
              .filter((product) => product.is_enabled === 1)
              .map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* 圖片區 */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <button
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur transition hover:scale-110 hover:bg-yellow-400 hover:text-white"
                      aria-label={`購買 ${product.title}`}
                    >
                      <FiShoppingCart size={20} />
                    </button>
                  </div>

                  {/* 文字區 */}
                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-wide text-gray-900">
                        {product.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                        {product.category}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-700">
                      {product.description}
                    </p>

                    <p className="text-sm leading-6 text-gray-500">
                      {product.content}
                    </p>

                    <div className="flex items-end justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          NT$ {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          NT$ {product.origin_price.toLocaleString()}
                        </span>
                      </div>

                      
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductList;