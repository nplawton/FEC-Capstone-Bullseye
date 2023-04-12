import React from "react";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/header/header.jsx";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';
import Addcart from "./components/cart/cart";
//components


function App() {
  return (
    <div>
      <Header />
      {/* Photo portion */}
      {/* Add to cart */}
      <Addcart/>
      <CarouselContainer />
      {/* Review portion */}
      <Footer />
    </div>
  );
}

export default App;
