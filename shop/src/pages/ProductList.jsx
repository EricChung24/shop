import { FiShoppingCart } from "react-icons/fi";

function ProductList() {
  const categories = [
    "所有商品",
    "慢跑鞋",
    "滑板鞋",
    "厚底鞋",
    "限定 / 聯名企劃",
  ];

  const products = [
    {
      id: 1,
      name: "Monoverse",
      price: "NT$3,600",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product.png",
    },
    {
      id: 2,
      name: "Platform 404",
      price: "NT$2,600",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-1.png",
    },
    {
      id: 3,
      name: "Ripple",
      price: "NT$4,000",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-2.png",
    },
    {
      id: 4,
      name: "Urban Step",
      price: "NT$3,200",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-3.png",
    },
    {
      id: 5,
      name: "Street Flow",
      price: "NT$2,980",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-4.png",
    },
    {
      id: 6,
      name: "Cloud Run",
      price: "NT$4,280",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-5.png",
    },
    {
      id: 7,
      name: "Daily Motion",
      price: "NT$3,480",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-6.png",
    },
    {
      id: 8,
      name: "Skate Pulse",
      price: "NT$3,880",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-7.png",
    },
    {
      id: 9,
      name: "Limited Edge",
      price: "NT$4,680",
      image: "https://raw.githubusercontent.com/EricChung24/week4/main/assets/img/product-8.png",
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
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* 圖片區 */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* 浮動購物車按鈕 */}
                  <button
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur transition hover:scale-110 hover:bg-yellow-400 hover:text-white"
                    aria-label={`購買 ${product.name}`}
                  >
                    <FiShoppingCart size={20} />
                  </button>
                </div>

                {/* 文字區 */}
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-wide text-gray-900">
                      {product.name}
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                      NEW
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-gray-500">
                    經典輪廓設計，兼具舒適與日常搭配感，適合城市穿搭與輕運動需求。
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-lg font-bold text-gray-900">
                      {product.price}
                    </p>
                    <button className="text-sm font-medium text-gray-700 transition hover:text-yellow-500">
                      查看更多
                    </button>
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