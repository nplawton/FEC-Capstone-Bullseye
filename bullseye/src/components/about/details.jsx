import React, { useState, useRef, useEffect } from "react";
import Specification from './specifications.jsx'

const Details = ( { showMore, nikon } ) => {

    return (
        <>
            <div className="details-highlights">
            <h2 className="details-header-highlights">Highlights</h2>
            <div className="details-content-hightlights">
                <ul className="details-content-highlights">
                    <li className="details-text-highlights">
                        <div className="details-text-highlights-text">
                            Class leading image quality, ISO range, image processing and metering equivalent to the award-winning D500
                        </div>
                    </li>
                    <li className="details-text-highlights">
                        <div className="details-text-highlights-text">
                            Large 3.2 922K dot, tilting LCD screen with touch functionality
                        </div>
                    </li>
                    <li className="details-text-highlights">
                        <div className="details-text-highlights-text">
                            51-point AF system with 15 cross-type sensors and group-area AF paired with up to 8 fps continuous shooting capability
                        </div>
                    </li>
                    <li className="details-text-highlights">
                        <div className="details-text-highlights-text">
                            4K Ultra HD and 1080p Full HD video with stereo sound, power aperture control, auto ISO, 4K UHD Time-Lapse and more
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            <div className={`spec-desc-container ${showMore ? "show" : "noshow"}`}>
                {(nikon == undefined) ? <div>Loading...</div> : < Specification nikon={nikon}/>} 
                <div className="description-container">
                    <h2 className="details-header-description">Description</h2>
                    <div className="description-text">
                        <p>Born from a desire for flagship performance and innovation in a more compact and streamlined connected camera, the Nikon D7500 delivers the game-changing resolution, ISO range, image processing and energy efficiency of the award-winning D500 in an enthusiast-level DSLR. Simply put, the D7500 is built to outperform any camera in its class with top-tier image quality, blazing speed, flawless autofocus, 4K Ultra HD video and pro-grade creative tools - all in a comfortable, rugged design. This is a camera for the new generation of creators. 20.9 MP DX-format Image Sensor The D7500 uses the same 20.9 MP DX-format image sensor and EXPEED 5 image processing engine as the D500, taking your photos and videos to the next level. Capture with phenomenal sharpness and tonality, especially in low light situations like concerts, sporting events, parties and events. With a wide ISO range up to 51,200, remarkable noise reduction, rapid write speeds and virtually zero lag, the D7500 is ready for your next challenge. Powerful Shooting The D7500 has improved buffer for shooting RAW images. Capture 8 frames per second continuously, up to 100 JPEG Fine frames or up to 50 14-bit lossless compressed RAW frames. With up to 50 RAW shots captured, continue taking photos even while the previous RAW images are being written to the memory card. Lock on to fast subjects with 51 available focus points, 15 cross-type sensors and group-area AF for sharper, faster detection in low light. The D7500 uses the same 180,000-pixel RGB sensor as the D500 to detect human faces and improve AF performance during high speed shooting. Tilting 3.2-inch Touchscreen Tilt the large 3.2-in touchscreen up or down to shoot at high or low angles and simply touch where you want focus when using Live View. Quickly swipe through your shots, pinch to zoom and more. The D7500 uses a Monocoque design and extensive weather sealing to withstand moisture, dust and some heavy use. Slimmer ergonomics and a deeper grip improve stability for handheld shooting and comfort for all day shooting or using telephoto, tele-zoom or all-in-one NIKKOR lenses. Battery Life Nikon DSLR cameras are designed to excel at energy efficiency, and the D7500 is particularly efficient. Capture approximately 950 shots on a single battery charge so you never miss a photo op! Master the Light Add balance, depth and drama to your images with the D7500's built-in flash, which uses detailed, in-camera scene analysis to add just the right amount of light to your subject. The D7500 has wireless commander capability with up to 2 groups (A/B) of line-of-sight Speedlights or 3 groups (C/D/E) of radio-controlled Speedlights. 4K Ultra HD Video If you've been itching to enter the world of filmmaking, the D7500 is your gateway DSLR. Record rich and detailed 4K Ultra HD or Full HD videos up to 29 minutes 59 seconds through industry-leading NIKKOR lenses while using pro-level video features like power aperture control to adjust aperture while recording and touch focus control. Create beautiful 4K Ultra HD time-lapse movies. Movies can be recorded in MP4 or the conventional MOV format, allowing easy playback on smart devices. The D7500 adjusts to your creative workflow with the freedom to record to an external device, the camera's memory card or both simultaneously Wi-Fi and Bluetooth Connectivity Connect to your world seamlessly using the D7500's built-in Wi-Fi and Bluetooth connectivity features. Share your most impressive shots with the world the minute you take them. Install Nikon's SnapBridge app on a compatible phone or tablet and connect to the D7500 for instant photo sharing, automatic backups and even remote camera triggering - great for wildlife shooting, parties, self portraits and group shots with you in them.</p>
                    </div>
            </div>
            </div>
            
        </>
    )
}

export default Details