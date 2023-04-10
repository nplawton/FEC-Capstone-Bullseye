import React, { useState, useEffect } from "react";
import ScrollHead from "./scrollHead";
import StaticHead from "./staticHead"
import './header.css';


const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [grey, setGrey] = useState(false)

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

        <StaticHead scrolled={scrolled}/>
        <ScrollHead 
            scrolled={scrolled}
            grey={grey}
            setGrey={setGrey}
            />
        <div className={grey ? 'grey' : 'content'}>
            <p>content goes here</p>
        </div>
        <p className="test">this is so I can scroll, delete later</p>
        </header>
    )
}

export default Header