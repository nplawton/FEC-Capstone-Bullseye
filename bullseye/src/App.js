import React from "react";
import { ProductProvider } from "./components/context/ProductContext.js";
import Footer from "./components/Foot/Footer.js";
import Signup from "./components/Foot/Signup.js";
import Footimage from "./components/Foot/Footimage.js";
import Subsocial from "./components/Foot/Subsocial.js";
import End from "./components/Foot/End.js";
import './App.css';
import Header from "./components/header/header.jsx";
import Reviews from "./components/reviews/Reviews";
import Addcart from "./components/cart/cart";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';
import Photo from "./components/product-photo/product-photo";
import About from "./components/about/about.jsx";


//components


function App() {
  return (
    <ProductProvider>
      <Header />
      <Photo />
      <Addcart/>
      <About />
      <CarouselContainer />
      <Reviews />
      <Signup />
      <Footer />
      <Footimage />
      <Subsocial />
      <End />
    </ProductProvider>
  );
}

export default App;
