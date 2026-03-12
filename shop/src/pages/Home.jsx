import hero from "../assets/images/hero.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import s1 from "../assets/images/product.png";
import s2 from "../assets/images/product-1.png";
import s3 from "../assets/images/product-2.png";
import s4 from "../assets/images/product-3.png";



function Home() {
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

  const hotProducts = [
    {
      id: 1,
      name: "PLATFORM 404",
      price: "NT$2,600",
      image: s1,
    },
    {
      id: 2,
      name: "Green 404",
      price: "NT$2,600",
      image: s2,
    },
    {
      id: 3,
      name: "Pink Ripple",
      price: "NT$4,000",
      image: s3,
    },
    {
      id: 4,
      name: "Pink flower",
      price: "NT$3,200",
      image: s4,
    },
  ];
  return (
    <>
      <div
        className="mb-12 relative h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h2 className="relative  right-60 bottom-20 text-5xl font-bold text-white">
          Your Step, Your Statement
        </h2>
        <button
          type="button"
          style={{ cursor: "pointer" }}
          className="relative mt-6 rounded-lg right-200 top-0  bg-yellow-400 px-6 py-3 font-extrabold text-black hover:bg-yellow-300"
        >
          立即選購
        </button>
      </div>

      <h2 className="text-6xl text-center font-bold mb-4">New Arrival</h2>
      <p className="text-center text-4xl">新品上市</p>
      <section className=" py-10 mb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {products.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-3 w-full object-cover"
                />
                <h3 className="text-base font-bold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-100 py-10">
        <h2 className="ml-20 text-4xl font-bold">熱銷商品</h2>
         <div className="grid grid-cols-4 gap-x-8 gap-y-10">
            {hotProducts.map((pitem) => (
              <div key={pitem.id}>
                <img
                  src={pitem.image}
                  alt={pitem.name}
                  className="mb-3 w-full object-cover p-2"
                />
                <h3 className="text-center text-base font-bold text-gray-900">
                  {pitem.name}
                </h3>
                <p className="text-center text-sm text-gray-700">{pitem.price}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Home;
