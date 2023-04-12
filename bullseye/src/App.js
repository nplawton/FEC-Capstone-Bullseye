import React from "react";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/header/header.jsx";
import Reviews from "./components/reviews/Reviews";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';
import Photo from "./components/product-photo/product-photo";

//components


function App() {
  return (
    <div>
      <Header />
      <Photo />
      {/* Add to cart */}
      <Addcart/>
      <CarouselContainer />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
