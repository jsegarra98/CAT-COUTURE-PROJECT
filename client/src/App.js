import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import PaginationControls from "./components/products/PaginationControls";

const App = () => {
  const [counter, setCounter] = useState(12);
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
      <PaginationControls counter={counter} setCounter={setCounter} />
      <Footer />
    </div>
  );
};

export default App;
