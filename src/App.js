import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-700 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
