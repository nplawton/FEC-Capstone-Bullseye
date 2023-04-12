import React from "react";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/header/header.jsx";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';
import Photo from "./components/product-photo/product-photo";

//components


function App() {
  return (
    <div>
      <Header />
      <Photo />
      {/* Add to cart */}
      <CarouselContainer />
      {/* Review portion */}
      <Footer />
    </div>
  );
}

export default App;
