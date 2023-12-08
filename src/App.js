import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Container from "./Container/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hair from "./Navlinkpages/Hair/Hair";
import Body from "./Navlinkpages/Body/Body";
import Face from "./Navlinkpages/Face/Face";
import Kits from "./Navlinkpages/Kits/Kits";
import Ourstory from "./Navlinkpages/Ourstory/Ourstory";
import Blog from "./Navlinkpages/Blog/Blog";
import Contact from "./Navlinkpages/Contact/Contact";
import Shipping from "./Navlinkpages/Shipping/Shipping";
import ProductDisplay from "./ProductDisplaypage/ProductDisplay";
import Product from "./Productpage/Product";
import ScrollToTop from "./ScrolltoTop/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Hair" element={<Hair />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/Face" element={<Face />} />
          <Route path="/Kits" element={<Kits />} />
          <Route path="/Ourstory" element={<Ourstory />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/ProductDisplay" element={<ProductDisplay />} />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
