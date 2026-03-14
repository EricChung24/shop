import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductList from "./pages/ProductList";


function App() {
  

  return (
    <>
      <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
        <Footer />
    </>
  );
}

export default  App
