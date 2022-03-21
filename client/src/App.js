import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products/:category"
          element={<ProductList></ProductList>}
        ></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
