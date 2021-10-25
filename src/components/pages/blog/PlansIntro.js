import React, { useState } from 'react';
import './PlansIntro.css';
import adventureImg from '../../images/intro-one.png';
import adventureImgTwo from '../../images/intro-two.png';
function Plans() {
    return (
        <div className="scroll-blog">
        <div className="plans" id="PlansIntro">
            <div className="plans-container">
                <div className="first-content">
                <img src={adventureImg} alt="content" className="first-plan" />
                <div className="plan-text">
                    <h1>Discount up to </h1>
                    <h1>50% All Excursions</h1>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Qui consectetur eum praesentium animi. 
                        Sit laborum reiciendis neque ex sed 
                        blanditiis hic quam aperiam incidunt ratione? Iure, 
                        rem ratione! Magni, deserunt?</p>
                <div className="planbutton">
                    <p> READ MORE </p>
                    </div>
                </div>
                </div>
            <div className="second-content">
                <div className="secondry-plan-text">
                    <h1>January's Promo:</h1>
                    <h1>Buy 1 Get 1 Free!</h1>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Qui consectetur eum praesentium animi. 
                        Sit laborum reiciendis neque ex sed 
                        blanditiis hic quam aperiam incidunt ratione? Iure, 
                        rem ratione! Magni, deserunt?</p>
                        <span className="secondry-planbutton">
                            READ MORE
                        </span>
                </div>
                <img src={adventureImgTwo} alt="content" className="second-plan" />
                </div>
                </div>
        </div>
        </div>
    )
}

export default Plans;
