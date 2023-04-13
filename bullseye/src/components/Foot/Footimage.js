import React from 'react';
import FooterCSS from './Footer.module.css';
//import target from '../targetimages';


const Footimage = () => {
  return (
    <div className = { FooterCSS.container2 }>
      <footer className={FooterCSS.targetplacer}>
        <img src="https://target.scene7.com/is/content/Target/GUEST_ca8f1d56-9000-4407-be78-2c33be983dab" alt="target place"/>
        </footer>
    </div>
  );
}

 
 


export default Footimage;