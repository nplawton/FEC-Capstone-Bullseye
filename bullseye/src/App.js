import React from "react";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/header.jsx";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';

//components


function App() {
  return (
    <div>
      <Header />
      {/* Photo portion */}
      {/* Add to cart */}
      <CarouselContainer />
      {/* Review portion */}
      <Footer />
    </div>
  );
}

export default App;
