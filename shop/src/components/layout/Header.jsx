import avatar from "../../assets/images/avatar.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full shadow">
      <div className="container mx-auto flex items-center justify-between px-16 py-4">
        {/* 左邊 */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-serif text-gray-800">
            <Link to="/">StoryShop</Link>
          </h1>

          <nav>
            <ul className="flex text-gray-700">
              <li className="ml-12">
                <Link
                  to="/products"
                  className="font-serif font-extrabold hover:text-yellow-400"
                >
                  商品列表
                </Link>
              </li>
              <li className="ml-12">
                <Link
                  to="/story"
                  className=" font-serif font-extrabold hover:text-yellow-400"
                >
                  品牌故事
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* 右邊 */}
        <div>
          <Link to="/profile" className="ml-auto text-gray-700 hover:text-blue-600">
            <img src={avatar} width={30} height={30} alt="User Avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;