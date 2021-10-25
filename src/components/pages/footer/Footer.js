import React from 'react';
import './Footer.css';
import Bottomshape from '../../images/scondry-top_shape.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer'>
         <div className="shape-footer">
            <img src={Bottomshape} alt="" className="footer-shape" />
            </div>
            <div className="footer-container">
                <div className="text-footer">
                    <h3 className="title-footer">
                        SUMMER HIKING
                    </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quo,
                         harum expedita mollitia quibusdam incidunt ipsam alias 
                         officia veritatis fugiat voluptatibus nam sed minima,
                         cumque architecto eos, dolores adipisci veniam!</p>
                         <ul className="social-media">
                             <li className="social-link">
                                 <Link to='https://instagram.com/' className="social__item">
                                     <AiOutlineInstagram />
                                 </Link>
                             </li>
                             <li className="social-link">
                                 <Link to='https://instagram.com/' className="social__item">
                                     <FaFacebookF />
                                 </Link>
                             </li>
                             <li className="social-link">
                                 <Link to='https://instagram.com/' className="social__item">
                                     <AiOutlineTwitter />
                                 </Link>
                             </li>
                             <li className="social-link">
                                 <Link to='https://instagram.com/' className="social__item">
                                     <FaWhatsapp />
                                 </Link>
                             </li>
                         </ul>
                </div>
                <div className="footer-content">
                    <ul className="content">
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <h2>About</h2>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Histroy</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Our Team</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Brand Guidlines</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Terms&Condition</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Privacey Policy</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className="content">
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <h2>Services</h2>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>How To Order</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Our Product</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Our Status</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Promo</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Payment Method</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className="content">
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <h2>Other</h2>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Contact Us</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Help</p>
                            </Link>
                        </li>
                        <li className="content-items">
                            <Link to='/' className="conent-link">
                                <p>Privacy</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Footer
