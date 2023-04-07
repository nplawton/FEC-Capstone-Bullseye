import React, { useState, useEffect } from "react";
import ScrollHead from "./scrollHead";
import StaticHead from "./staticHead"

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

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
        <header className="header-wrapper">

        <StaticHead />
        <ScrollHead scrolled= {scrolled}/>
        <p className="test">this is so I can scroll, delete later</p>
        </header>
    )
}

export default Header