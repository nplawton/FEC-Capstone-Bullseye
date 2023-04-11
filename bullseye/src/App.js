import React from "react";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/header/header.jsx";
import Reviews from "./components/reviews/Reviews";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';

//components


function App() {
  return (
    <div>
      <Header />
      {/* Photo portion */}
      {/* Add to cart */}
      <CarouselContainer />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
