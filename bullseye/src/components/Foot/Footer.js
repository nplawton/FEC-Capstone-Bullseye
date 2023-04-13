import { useState } from 'react';
import FooterCSS from './Footer.module.css';



const Footer = () => {
   const links1 = [
    {id: 1, label: "About target"},
     {id: 2, label: "Careers"},
     {id: 3, label: "News & Blog"},
     {id: 4, label: "Target Brands"},
     {id: 5, label: "Bullseye Shop"},
     {id: 6, label: "Target's Coronavirus Response"},
     {id: 7, label: "Sustainability & ESG"},
     {id: 8, label: "Press Center"},
     {id: 9, label: "Advertise with Us"},
     {id: 10, label: "Investors"},
     {id: 11, label: "Affilites & Partners"},
     {id: 12, label: "Suppliers"},
     {id: 13, label: "TargetPlus"}
  ];

  const helplink =[
    {id: 1, label: "Target Help"},
     {id: 2, label: "Returns"},
     {id: 3, label: "Track Orders"},
     {id: 4, label: "Recalls"},
     {id: 5, label: "Contact Us"},
     {id: 6, label: "Feedback"},
     {id: 7, label: "Accessibility"},
     {id: 8, label: "Security & Fraud"},
     {id: 9, label: "Team Member Services"},
  ];
  const storeslink =[
    {id: 1, label: "Find a Store"},
     {id: 2, label: "Clinic"},
     {id: 3, label: "Pharmacy"},
     {id: 4, label: "Optical"},
     {id: 5, label: "More In-Store Services"},
  ];
  const serviceslink =[
    {id: 1, label: "Target Circle"},
     {id: 2, label: "RedCard"},
     {id: 3, label: "Target App"},
     {id: 4, label: "Registry"},
     {id: 5, label: "Same Day Delivery"},
     {id: 6, label: "Order Pickup"},
     {id: 7, label: "Drive Up"},
     {id: 8, label: "Free 2-Day Shipping"},
     {id: 9, label: "Shipping & Delivery"},
     {id: 10, label: "More Services"},
  ];


  return (
    <footer className = {FooterCSS.container}>
    <div><h3 className={FooterCSS.bordering} >About Us</h3>
    <div>{links1.map(link => (
    <p key={link.id} className={FooterCSS.tags}>{link.label}
    </p>
      ))}
      </div>

    </div>
    <div><h3 className={FooterCSS.bordering} >Help</h3>
    <div>{helplink.map(link => (
    <p key={link.id} className={FooterCSS.tags}>{link.label}
    </p>
      ))}
      </div>
    </div>
    
    <div><h3 className={FooterCSS.bordering} >Stores</h3>
    <div>{storeslink.map(link => (
    <p key={link.id} className={FooterCSS.tags}>{link.label}
    </p>
      ))}
      </div>
    </div>

    <div><h3 className={FooterCSS.bordering} >About Us</h3>
    <div>{serviceslink.map(link => (
    <p key={link.id} className={FooterCSS.tags}>{link.label}
    </p>
      ))}
      </div>
    </div>


  </footer>
  );
}

export default Footer;
