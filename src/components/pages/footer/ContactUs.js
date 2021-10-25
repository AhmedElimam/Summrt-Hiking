import React from 'react';
import './ContactUS.css';
import shapetop from '../../images/shape-top.png';
import Bottomshape from '../../images/scondry-top_shape.png';
function Contactus() {
    return (
        <div className='conactus'>
            <div className="coactus-container">
            <img src={shapetop} alt="Shapeone" className="shape__last" />
            <div className="conact-text">
                <h1>SUMMER HIKING</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eius at voluptatem pariatur voluptates hic placeat? Fugit, dignissimos distinctio</p>
            </div>
            <div className="email-setion">
                <input type="email" placeholder="YOUR EMAIL" className="email"/>
                <input type="submit" value="SUBSCRIB" className="subscrib"/>
            </div>
            </div>
        </div>
    )
}

export default Contactus 
