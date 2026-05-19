import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductList from "./pages/ProductList";
import BrandStory from "./pages/BrandStory";

function App() {
  

  return (
    <>
      <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/story" element={<BrandStory />} />
      </Routes>
        <Footer />
    </>
  );
}

export default  App
