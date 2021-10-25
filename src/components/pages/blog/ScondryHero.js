import React from 'react';
import './ScondryHero.css';
import Bottomshape from '../../images/scondry-top_shape.png';
import shapebottom from '../../images/Shape-bottom.png';
function ScondryHero() {
    return (
        <div className="scroll-blog">
        <div className="scondry-hero" id="plans-intro">
                        <div className="shap-scondr-bottom">
                <img src={Bottomshape} alt="shapeBottom" className="secondry-shap" />
                </div>
            <div className="scondry-hero_container">
                <div className="hero-text">
                    <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">EXPLORE</h2>
                    <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-delay={500}>THE WORLD</h1>
                </div>
                <div className="shape-third-bottom">
                    <img src={shapebottom} alt="shap-bottom" className="third-shape" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ScondryHero 
