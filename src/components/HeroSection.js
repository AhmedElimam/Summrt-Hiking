import React,{ useState, useEffect} from 'react';
import './HeroSection.css';
import { Link } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";
import shapetop from './images/shape-top.png';
import shapebottom from './images/Shape-bottom.png';

const HeroSection = () => {
    useEffect(() => {
        Aos.init({});
    }, []);

    const [button, setButton] = useState(false);
    const handelClick = () => setButton(!button);
    
    return (
        <div className='hero' id="hero">
            <div className="hero__container">
                <div className="shape__top">
                    <img src={shapetop} alt="Shapeone" className="shape__one" />
                </div> 
                
                <div className="main__hero">
                    <div className="head__lines">
                    <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" >IT'S TIME</h1>
                    <h1 data-aos="fade-right" data-aos-duration="2500" data-aos-once="true">FOR HIKING</h1>
                    <p data-aos="fade-right" data-aos-duration="2500" data-aos-once="true">Lorem Ipsum is simply dummy text</p>
                    <div className="readmore">
                    <Link to="blog"
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    className="readmore"
                    >
                         <button onClick={handelClick}>READ MORE</button>
                    </Link>
                </div>
                <div className="info">
                    <p data-aos="fade-in" data-aos-duration="500" data-aos-once="true">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum 
                    </p>
                </div>
                </div>
                </div>
                <div className="shape__bottom">
                <img src={shapebottom} alt="shapetwo" className="shape__two" />
                </div>
            </div>
        </div>
    )
};

export default HeroSection;
