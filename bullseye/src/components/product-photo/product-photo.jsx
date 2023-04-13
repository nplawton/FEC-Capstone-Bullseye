import React, { useState } from "react";
import './product-photo.css'
import nikon1 from './nikon1.jpg'
import nikon2 from './nikon2.webp'


const Photo = () => {
    const [mainPhoto, setMainPhoto] = useState(nikon1);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handlePhotoClick = (photo) => {
        setMainPhoto(photo);
    };

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    const getBackgroundPosition = () => {
        if (!isMouseOver) return "50% 50%";
        const x = mousePos.x * 100 / 500; // Assuming the container width is 500px
        const y = mousePos.y * 100 / 500; // Assuming the container height is 500px
        return `${x}% ${y}%`;
    };

    const prodDetails = [ 'Target', 'Electronics', 'Cameras', 'DSLR Cameras']

    const detailComponents = prodDetails.map((detail, index) => (
        <React.Fragment key={index}>
        <span className="detail-text">{detail}</span>
        {index < prodDetails.length - 1 && <span className="separator"> / </span>}
      </React.Fragment>
        
    ))
    return (
        <div>
          <div className="main-container">
            <div className="content-container">
                <p className="details">{detailComponents}</p>
                <p className="details-brand">Shop all Nikon</p>
                <p className="title">Nikon D7500 DX-Format DSLR Camera (Body Only, Black)</p>
                    <div className="photo-area">
                         <ul className="list-products">
                            <li onClick={() => handlePhotoClick(nikon1)}
                            className={mainPhoto === nikon1 ? 'selected' : ''}
                            >
                            <img className="photo" src={nikon1}></img>
                            </li>
                            <li onClick={() => handlePhotoClick(nikon2)}
                            className={mainPhoto === nikon2 ? 'selected' : ''}
                            >
                            <img className="photo" src={nikon2}></img>
                            </li>
                            <div className="closer">Share your pic</div>
                        </ul>
                    <div
                        className="photo-container"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        backgroundImage: `url(${mainPhoto})`,
                        backgroundPosition: getBackgroundPosition(),
                        backgroundSize: isMouseOver ? "150%" : "100%",
                        }}
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Photo