//我要進入images資料夾，並且引入avatar.svg圖片
import avatar from "../../assets/images/avatar.svg";

function Header() {
  return (
    <header className=" w-full  shadow ">
      <div className="container mx-auto px-16 py-4 flex justify-between items-center">
        {/* 左邊 */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
          <nav>
            <ul className="flex text-gray-700">
              <li className="ml-12">
                <a href="#" className="hover:text-yellow-400 font-extrabold">
                  商品列表
                </a>
              </li>
              <li className="ml-12">
                <a href="#" className="hover:text-yellow-400 font-extrabold">
                  品牌故事
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* 右邊 */}
        <div>
          <a href="#" className="text-gray-700 hover:text-blue-600 ml-auto ">
            <img src={avatar} width={30} height={30} alt="User Avatar" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
