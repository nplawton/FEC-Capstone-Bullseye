import React from "react";
import { ProductProvider } from "./components/context/ProductContext.js";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/header/header.jsx";
import Reviews from "./components/reviews/Reviews";
import Addcart from "./components/cart/cart";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';
import Photo from "./components/product-photo/product-photo";

//components


function App() {
  return (
    <ProductProvider>
      <Header />
      <Photo />
      <Addcart/>
      <CarouselContainer />
      <Reviews />
      <Footer />
    </ProductProvider>
  );
}

export default App;
