import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductList from "./pages/ProductList";
import BrandStory from "./pages/BrandStory";
import ScrollToTop from "./components/common/ScrollToTop";
import Profile from "./pages/Profile";
function App() {
  

  return (
    <>
      <ScrollToTop />
      <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/story" element={<BrandStory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
        <Footer />
    </>
  );
}

export default  App
