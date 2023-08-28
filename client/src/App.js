import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import Header from "./components/Header";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // const queryParams = new URLSearchParams(window.location.search);
  // const page = parseInt(queryParams.get("page")) || 1;
  // const limit = parseInt(queryParams.get("limit")) || 12;

  // const [products, setProducts] = useState([]);
  // const [totalPages, setTotalPages] = useState(9);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/products?limit=${limit}&page=${page}`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setProducts(data.reviews);
  //         setTotalPages(data.totalPages);

  //         const totalProducts = data.totalProducts;
  //         const totalPages = Math.ceil(totalProducts / limit);
  //         setTotalPages(totalPages);
  //       } else {
  //         console.log("Fetch response not ok!");
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   fetchProducts();
  // }, [limit, page]);

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<ProtectedRoute />}>
          <Route exact path='/dashboard' element={<DashboardPage />} />
        </Route>
        <Route exact path='/' element={<ProductPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
