import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
function ProductList() {
  const [products, setProducts] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">商品列表</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 商品項目 */}
        <div className="border rounded-lg overflow-hidden shadow">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">商品名稱</h3>
            <p className="text-gray-600">商品描述</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold">NT$ 1000</span>
              <button className="bg-yellow-400 text-white px-4 py-2 rounded">
                <FiShoppingCart className="inline-block mr-1" />
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default ProductList;