import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to={"products"} />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
