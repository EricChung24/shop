import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
// 從環境變數讀取 API 基礎 URL、路徑、授權 token
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
const TOKEN = import.meta.env.VITE_API_TOKEN;
// ProductList 組件函數
function ProductList() {
  // 商品列表狀態，初始值為空陣列
  const [products, setProducts] = useState([]);
  // 加載狀態，初始值為 true（表示正在加載）
  const [loading, setLoading] = useState(true);
  // 錯誤狀態，初始值為 null（表示沒有錯誤）
  const [error, setError] = useState(null);

  // 副作用鉤子，在組件掛載時執行一次
  useEffect(() => {
    // 異步函數：取得商品列表
    const getProducts = async () => {
      try {
        // 設定加載狀態為 true
        setLoading(true);
        // 記錄開始時間用於計算 API 回應時間
        const startTime = performance.now();

        // 使用 axios 發送 GET 請求到 API
        const res = await axios.get(
          // 拼接完整的 API 端點：https://ec-course-api.hexschool.io/v2/api/lf2net679/admin/products
          `${API_BASE}v2/api/${API_PATH}/admin/products`,
          {
            // 設定請求 header
            headers: {
              // 帶上授權 token
              Authorization: TOKEN,
            },
            // 設定請求超時時間為 10 秒
            timeout: 10000,
          },
        );

        // 記錄結束時間
        const endTime = performance.now();
        // 在 console 列印 API 回應時間（毫秒）
        console.log(`📊 API 回應時間: ${(endTime - startTime).toFixed(2)}ms`);
        // 在 console 列印完整的 API 響應數據
        console.log("商品數據:", res.data);

        // 提取商品陣列，支援多種可能的數據結構
        const productList = res.data.products || res.data.data || res.data;
        // 在 console 列印提取後的商品陣列
        console.log("提取的商品:", productList);
        // 更新 products 狀態
        setProducts(productList);
        // 清除錯誤狀態
        setError(null);
      } catch (error) {
        // 如果發生錯誤，在 console 列印錯誤信息
        console.error("取得商品失敗:", error);
        // 將錯誤信息保存到狀態中
        setError(error.message);
      } finally {
        // 無論成功或失敗，都要設定加載狀態為 false
        setLoading(false);
      }
    };

    // 執行異步函數
    getProducts();
  }, []);
  // 空的依賴陣列表示此 effect 只在組件掛載時執行一次

  // 返回 JSX 結構
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">商品列表</h2>

      {loading && (
        <div className="text-center py-16 text-lg text-gray-500">載入中...</div>
      )}
      {error && (
        <div className="text-center py-16 text-lg text-red-500">
          ❌ 錯誤: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products && products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative overflow-hidden bg-gray-200 h-48">
                  <img
                    src={
                      item.imageUrl ||
                      item.image ||
                      "https://via.placeholder.com/300"
                    }
                    alt={item.title || item.name || "商品"}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {item.price && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      熱銷
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title || item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {item.description || "暫無描述"}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-red-600">
                          NT$ {item.price || item.origin_price || 0}
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 font-semibold flex items-center gap-2 shadow-md hover:shadow-lg">
                        <FiShoppingCart size={18} />
                        <span>加購</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">📦 沒有商品</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 導出 ProductList 組件
export default ProductList;
