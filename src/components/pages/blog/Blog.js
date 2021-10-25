import React from 'react';
import './Blog.css';
import scondryShapeTop from '../../images/scondry-bottom_shape.png';
import shadowImg from '../../images/Shadow.png';
import "aos/dist/aos.css";

function Blog() {
    return (
        <div className="scroll-blog">
        <div className="blog" id="plans-intro">
            <div className="blog-container" >
                <img src={scondryShapeTop} alt="shape" className="shape-top_second" />
                <div className="blot-text">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Hiking in the mountains</h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={300}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Itaque rerum recusandae architecto, 
                    laudantium neque in harum nam repellat atque veritatis velit temporibus animi sequi,
                     corrupti cum, quos repellendus aut quod.</p>
                </div>
                <img src={shadowImg} alt="shadow" className="shadow-botton" />
            </div>
        </div>
        </div>
    )
}

export default Blog
