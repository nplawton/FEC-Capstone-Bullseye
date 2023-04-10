import { useState } from 'react';
import FooterCSS from './Footer.module.css';



const Footer = () => {
  // const tagss = [
  //   { id: 1, text: 'tags 1' },
  //   { id: 2, text: 'tags 2'},
  //   { id: 3, text: 'tags 3' },
  // ];
  return (
  <footer className = {FooterCSS.container}>
    <div><h3 className={FooterCSS.bordering} >About Us</h3>

    <>
    <div className={FooterCSS.tags} >
  
    <a>About target</a>
     <a>Careers</a>
     <a>News & Blog</a>
     <a>Target Brands</a>
     <a>Bullseye Shop</a>
     <a>Target's Coronavirus Response</a>
     <a>Sustainability & ESG</a>
     <a>Press Center</a>
     <a>Advertise with Us</a>
     <a>Investors</a>
     <a>Affilites & Partners</a>
     <a>Suppliers</a>
     <a>TargetPlus</a>
    </div>
    </>
     </div>

     <div><h3 className={FooterCSS.bordering} >Help</h3> 

      <>
      <div className={FooterCSS.tags}>
        <a>Target help</a>
        <a>Returns</a>
        <a>Track ordeers</a>
        <a>Recalls</a>
        <a>Contact Us</a>
        <a>Feedback</a>
        <a>Accessibilty</a>
        <a>Security & Fraud</a>
        <a>Team Member Services</a>
      </div></>
      </div>

     <div><h3 className={FooterCSS.bordering} >Stores</h3> 

      <>
      <div className={FooterCSS.tags}>
        <a>Target help</a>
        <a>Returns</a>
        <a>Track ordeers</a>
        <a>Recalls</a>
        <a>Contact Us</a>
        <a>Feedback</a>
        <a>Accessibilty</a>
        <a>Security & Fraud</a>
        <a>Team Member Services</a>
      </div></>
      </div>

     <div><h3 className={FooterCSS.bordering} >Services</h3> 

      <>
      <div className={FooterCSS.tags}>
        <a>Target help</a>
        <a>Returns</a>
        <a>Track ordeers</a>
        <a>Recalls</a>
        <a>Contact Us</a>
        <a>Feedback</a>
        <a>Accessibilty</a>
        <a>Security & Fraud</a>
        <a>Team Member Services</a>
      </div></>
      </div>
  </footer>
  );
}

export default Footer;

// const Footer = () => {
//   const [atag, setatag] = useState(<a></a>)

//   function updateAtag() {
//     setatag(atags => atags = <a></a>)
//   }

//   return (
//   <footer className = "footer-container">
//     <div><h3 className={FooterCSS.bordering} >About Us</h3>
//      <a setatag={updateAtag}>About target</a>
//      {/* <a>Careers</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a>
//      <a>About target</a> */}
//      </div>
//     <div><h3 >Help</h3> </div>
//     <div><h3 >Stores</h3> </div>
//     <div><h3 >Services</h3> </div>
//   </footer>
//   );