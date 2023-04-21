import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubsocialCSS from './Subsocial.module.css';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok} from '@fortawesome/free-brands-svg-icons'



const Subsocial = () => {
  return (
    <div className={SubsocialCSS.maincontainer}>
      <div className={SubsocialCSS.contentwrapper}>
        <a href='https://pinterest.com' className={SubsocialCSS['social-icon']}>
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href='https://facebook.com' className={SubsocialCSS['social-icon']}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='https://Instagram.com' className={SubsocialCSS['social-icon']}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://twitter.com' className={SubsocialCSS['social-icon']}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='https://youtube.com' className={SubsocialCSS['social-icon']}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href='https://tiktok.com' className={SubsocialCSS['social-icon']}>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      {/* <div className={SubsocialCSS.links}>
          <p href='#'>Terms</p>
          <p href='#'>CA Supply Chain</p>
          <p href='#'>Privacy</p>
          <p href='#'>CA Privacy Rights</p>
          <p href='#'>Your Privacy Choices - CA</p>
          <p href='#'>Interest Based Ads</p>
          <span>TM & © 2023 Target Brands, Inc.</span>
        </div> */}
      </div>
    </div>
  );
}

export default Subsocial;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faPinterest, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import SubsocialCSS from './Subsocial.module.css';

// const Subsocial = () => {
//   return (
//     <div className={SubsocialCSS.maincontainer}>
//       <div className={SubsocialCSS.contentwrapper}>
//         <div className={SubsocialCSS.socialIcons}>
//           <a href='https://pinterest.com' className={SubsocialCSS.socialIcon}>
//             <FontAwesomeIcon icon={faPinterest} />
//           </a>
//           <a href='https://facebook.com' className={SubsocialCSS.socialIcon}>
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href='https://Instagram.com' className={SubsocialCSS.socialIcon}>
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href='https://twitter.com' className={SubsocialCSS.socialIcon}>
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href='https://youtube.com' className={SubsocialCSS.socialIcon}>
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a href='https://tiktok.com' className={SubsocialCSS.socialIcon}>
//             <FontAwesomeIcon icon={faTiktok} />
//           </a>
//         </div>
//         <div className={SubsocialCSS.links}>
//           <a href='#'>Terms</a>
//           <a href='#'>CA Supply Chain</a>
//           <a href='#'>Privacy</a>
//           <a href='#'>CA Privacy Rights</a>
//           <a href='#'>Your Privacy Choices - CA</a>
//           <a href='#'>Interest Based Ads</a>
//           <span>TM & © 2023 Target Brands, Inc.</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Subsocial;
