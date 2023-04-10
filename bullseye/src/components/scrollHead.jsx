import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import target from "./target.jpg";


const ScrollHead = ({ scrolled, grey, setGrey }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [login, setLogin] = useState(false);
  const [menuState, setmenuState] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  }
  )

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  // Search not in use yet

  const categories = ['All Categories', 'Easter', 'Black-owned or founced brands at target', 'Grocery', 'Clothing, Shoes & Accessories', 'Baby', 'Home', 'Furniture', 'Kitchen & Dining', 'Outdoor Living & Garden', 'Toys', 'Electronics', 'Video Games', 'Movies, Music & Books', 'Sports & Outdoors', 'Beauty', 'Personal Care', 'Health', 'Pets', 'Household Essentials', 'Arts, Crafts & Sewing', 'School & Office Supplies', 'Party Supplies', 'Luggage', 'Gift Ideas', 'Gift Cards', 'Clearance']
  const toggleLogin = () => {
    setLogin();
  };



  const toggleMenu = (menuName) => {
    setmenuState({
        ...menuState,
        [menuName]: !menuState[menuName],
    })
  }

  return (
    <>
    <div className={`scroll-header ${scrolled ? "fixed" : ""}`}>
        <img src={target} alt="target" width="50" height="50" className="logo"/>
        <button className="menu" >
            <IconContext.Provider value={{ className: "menu-expand" }}> 
                <AiOutlineMenu /> 
            </IconContext.Provider>
        </button> 

        <div className="full-content">
            <button className="full-text" 
            onClick={() => { 
                setGrey(true)
                toggleMenu("menu1")
            }}>
                Categories  
                <IconContext.Provider value={{ className: "chevron"}}> 
                    <FiChevronDown />
                </IconContext.Provider>
            </button>
            {menuState.menu1 && <div className="dropdown-content">
              {categories.map((category) => (<li key={category} className="dropdown-text"> {category}         
              </li>))}
            </div>}
            
            
            <button className="full-text">
                Deals
                <IconContext.Provider value={{ className: "chevron"}}> 
                    <FiChevronDown />
                </IconContext.Provider>
            </button>
            <button className="full-text">
                What's New
                <IconContext.Provider value={{ className: "chevron"}}> 
                    <FiChevronDown />
                </IconContext.Provider>
            </button>
            <button className="full-text">
                Pickup & Delivery
                <IconContext.Provider value={{ className: "chevron"}}> 
                    <FiChevronDown />
                </IconContext.Provider>
            </button>
        </div>

        <form className="search-container">
        <input type="text" className="search-bar" placeholder="  Search"></input>
        <button type="submit" className="search-button">
              {/* <i class="fa fa-search"></i> */}
        </button>
      </form>
      <button className="login-btn" onClick={toggleLogin}>
        <IconContext.Provider value={{ size: "2em" }}> 
          <FaUserCircle /> 
        </IconContext.Provider>
        <div className="scroll-text">
          Sign in
        </div>
        <IconContext.Provider value={{ className: "chevron"}}> 
          <FiChevronDown />
        </IconContext.Provider>
      </button>
      <button className="cart-btn">
        <IconContext.Provider value={{ className: "cart" }}> 
          <FaShoppingCart />
        </IconContext.Provider>
      </button>
    </div>
    </>
  );
};
    
export default ScrollHead