import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./components/Blog";
import { Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
