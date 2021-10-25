import React, { useState } from 'react';
import { GiWarPick } from 'react-icons/gi';
import { FaHiking } from 'react-icons/fa';
import { FaWpexplorer } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';
import StripeContainer from '../../StripeContainer';
function Pricing() {
    const [showItem, setShouItem] = useState(false)
    return (
        <div className="scroll-pricing">
        <IconContext.Provider value={{color: '#fff', size:64}}>
        <div className="pricing__section" id="pricing">
            <div className="pricing__wrapper">
                <h1 className="pricing__heading text">
                    <span>CHOSSE A PLAN</span>
                </h1>
                <div className="pricing__container">
                    {showItem ? <StripeContainer /> : <div className="pricing__container-card" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay={200}>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaHiking />
                            </div>
                            <h3>JUST HIKING</h3>
                            <h4>$199.99</h4>
                            <p>PER PERSON</p>
                            <ul className="pricing__container-features">
                                <li>BASIC HIKING GEARSET</li>
                                <li>ONE WEEK OF HIKING</li>
                                <li>ONE TRIP</li>
                            </ul>
                            <h2 className="payment--buttton" onClick={ () => setShouItem(true)}>
                                CHOOSE THIS PLAN
                            </h2>
                        </div>
                    </div>
}

{showItem ? <StripeContainer /> : <div className="pricing__container-card" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={1000}>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <GiWarPick />
                            </div>
                            <h3>ADVENTURE</h3>
                            <h4>$499.99</h4>
                            <p>PER PERSON</p>
                            <ul className="pricing__container-features">
                                <li>FULL&ADVANCED GEARSET</li>
                                <li>MONTH OF HIKING</li>
                                <li>FIVE TRIPS</li>
                            </ul>
                            <h2 className="payment--buttton" onClick={ () => setShouItem(true)}>
                                CHOOSE THIS PLAN
                            </h2>
                        </div>
                    </div>
}
{showItem ? <StripeContainer /> : <div className="pricing__container-card" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay={500}>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaWpexplorer />
                            </div>
                            <h3>EXPLORER</h3>
                            <h4>$299.99</h4>
                            <p>PER PERSON</p>
                            <ul className="pricing__container-features">
                                <li>ADVANCED GEARSET</li>
                                <li>TWO WEEKS OF HIKING</li>
                                <li>THREE TRIPS</li>
                            </ul>
                            <h2 className="payment--buttton" onClick={ () => setShouItem(true)}>
                                CHOOSE THIS PLAN
                            </h2>
                        </div>
                    </div>
}                </div>
            </div>
            
        </div>
        </IconContext.Provider>
        </div>
    )
}

export default Pricing
