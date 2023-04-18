import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import target from "./target.jpg";
import SignInMenu from "./signIn";

const ScrollHead = ({ scrolled, grey, setGrey, setIsSignInMenuVisible }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuState, setmenuState] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    }
  )

  

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  // Search not in use yet

  const categories = ['All Categories', 'Easter', 'Black-owned or founced brands at target', 'Grocery', 'Clothing, Shoes & Accessories', 'Baby', 'Home', 'Furniture', 'Kitchen & Dining', 'Outdoor Living & Garden', 'Toys', 'Electronics', 'Video Games', 'Movies, Music & Books', 'Sports & Outdoors', 'Beauty', 'Personal Care', 'Health', 'Pets', 'Household Essentials', 'Arts, Crafts & Sewing', 'School & Office Supplies', 'Party Supplies', 'Luggage', 'Gift Ideas', 'Gift Cards', 'Clearance']
  const deals = ['Top Deals', 'Target Circle Offers', 'Weekly Ad', 'Clearance']
  const whatsNew = ['Target New Arrivals', 'Target Finds', '#TargetStyle']
  const pickup = ['Shop Order Pickup', 'Shop Same Day Delivery']


  const toggleLogin = () => {
    setIsSignInMenuVisible((prevState) => !prevState);
    setGrey(true)
  };


  //Prepare for pain. In order for the menu to maintain the position of the button like the target website there needs
  //to be a reference for the button and one for the list. We make variables here for ease later.

  const categoriesButtonRef = useRef();
  const categoriesListRef = useRef();
  const dealsButtonRef = useRef();
  const dealsListRef = useRef();
  const whatsNewListRef = useRef();
  const whatsNewButtonRef = useRef();
  const pickupListRef = useRef();
  const pickupButtonRef = useRef();

  // This is a general function that looks for a value on both. When a button is hit there will be a list ref for this to work

  const setPosition = (buttonRef, listRef) => {
    if (buttonRef.current && listRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      listRef.current.style.left = `${buttonRect.left}px`;
    }
  };

  // I dont know any easier way to do this. I'm sure there is, I'm too tired to try.
  // this is for react to 'react' based on a state being true.

  useEffect(() => {
    if (menuState.menu1) {
      setPosition(categoriesButtonRef, categoriesListRef);
    }
    if (menuState.menu2) {
      setPosition(dealsButtonRef, dealsListRef);
    }
    if (menuState.menu3) {
      setPosition(whatsNewButtonRef, whatsNewListRef);
    }
    if (menuState.menu4) {
      setPosition(pickupButtonRef, pickupListRef);
    }
  }, [menuState]);

  //function for the on click. Sets it to the opposite of whatever it is upon button click.

  const toggleMenu = (menuName) => {
    setmenuState((preveState) => {
      const newMenuState = {
        menu1:false,
        menu2: false,
        menu3: false,
        menu4: false,
      };
      newMenuState[menuName] = !preveState[menuName];
      return newMenuState
    });
  };


  return (
    <>
    <div className={`scroll-header ${scrolled ? "fixed" : ""}`}>
      <div className="scroll-interactive">
        <img src={target} alt="target" width="50" height="50" className="logo"/>
        
        <button className="menu" >
          <IconContext.Provider value={{ className: "menu-expand" }}> 
            <AiOutlineMenu /> 
          </IconContext.Provider>
        </button>
      
        <div className="full-content">
            <button className="full-text" 
              onClick={() => { 
                toggleMenu("menu1")
              }}
              ref={categoriesButtonRef}
              >
                Categories  
                <IconContext.Provider value={{ className: "chevron"}}> 
                  <FiChevronDown />
                  </IconContext.Provider>
            </button>
            
          <button className="full-text"
            onClick={() => { 
              toggleMenu("menu2")
            }}
            ref={dealsButtonRef}
          >
            Deals
            <IconContext.Provider value={{ className: "chevron"}}> 
                <FiChevronDown />
            </IconContext.Provider>
          </button>
          <button className="full-text"
            onClick={() => { 
              toggleMenu("menu3")
            }}
            ref={whatsNewButtonRef}
          >
            What's New
            <IconContext.Provider value={{ className: "chevron"}}> 
                <FiChevronDown />
            </IconContext.Provider>
          </button>

          <button className="full-text"
            onClick={() => { 
              toggleMenu("menu4")
            }}
            ref={pickupButtonRef}
          >
            Pickup & Delivery
            <IconContext.Provider value={{ className: "chevron"}}> 
                <FiChevronDown />
            </IconContext.Provider>
          </button>
      </div>

          <form className="search-container">
            <input type="text" className="search-bar" placeholder="  Search"></input>
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

      {menuState.menu1 && 
        <ul ref={categoriesListRef} className="categories-list">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <li className="dropdown-text">{category}</li>
              <div className="separator-menu"></div>
            </React.Fragment>
          ))}
      </ul>}

      {menuState.menu2 && 
        <ul ref={dealsListRef} className="categories-list">
          {deals.map((deal, index) => (
            <React.Fragment key={index}>
              <li className="dropdown-text">{deal}</li>
              <div className="separator-menu"></div>
            </React.Fragment>
          ))}
      </ul>}

      {menuState.menu3 && <ul ref={whatsNewListRef} className="categories-list">
          {whatsNew.map((what, index) => (
            <React.Fragment key={index}>
              <li className="dropdown-text">{what}</li>
              <div className="separator-menu"></div>
            </React.Fragment>
        ))}
      </ul>}

      {menuState.menu4 && <ul ref={pickupListRef} className="categories-list">
        {pickup.map((pickup, index) => (
          <React.Fragment key={index}>
            <li className="dropdown-text">{pickup}</li>
            <div className="separator-menu"></div>
          </React.Fragment>
        ))}
      </ul>}
      </div>
    </div>
    </>
  );
};
    
export default ScrollHead



