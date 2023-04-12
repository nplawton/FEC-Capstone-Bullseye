import React, { useState, useEffect } from "react";
import ScrollHead from "./scrollHead";
import StaticHead from "./staticHead"
import Menus from "./menus"
import './header.css'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [grey, setGrey] = useState(false)
    const [isLocationMenuVisible, setLocationMenuVisible] = useState(false);
    const [isSignInMenuVisible, setIsSignInMenuVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return (
      <>
        <Menus
          isLocationMenuVisible={isLocationMenuVisible}
          setLocationMenuVisible={setLocationMenuVisible}
          isSignInMenuVisible={isSignInMenuVisible}
          setIsSignInMenuVisible={setIsSignInMenuVisible}
        />
        <header className="header-wrapper">
          <StaticHead 
          scrolled={scrolled}
          grey={grey}
          setGrey={setGrey}
          setLocationMenuVisible={setLocationMenuVisible}
          />
          <ScrollHead 
          scrolled={scrolled}
          grey={grey}
          setGrey={setGrey}
          setIsSignInMenuVisible={setIsSignInMenuVisible}
          />
        </header>
      </>
    )
}

export default Header