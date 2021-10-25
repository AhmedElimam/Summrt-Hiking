import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './MenuBlog.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import contentOneImg from "../../images/content__one.png";
import contentTwoImg from "../../images/content__two.png";
import contentThirdImg from "../../images/content__thrid.png";
import shadowImg from '../../images/Shadow.png';


function MenuBlog() {
    const aos =     useEffect(() => {
        Aos.init({});
    }, []);

    const [readMore, setReadMore] = useState(false);
    const handelReadMore = () => setReadMore(!readMore);

    const [readMoreTwo, setReadMoreTwo] = useState(false);
    const handelReadMoreTwo = () => setReadMoreTwo(!readMoreTwo);

    const [readMoreThird, setReadMoreThird] = useState(false);
    const handelReadMoreThird = () => setReadMoreThird(!readMoreThird);

  
    return (
        <div className='menu' id='menu'>
            <div className="menu__container">
                <div className="head__titles">
                <h1 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">LET'S GO</h1>
                <p data-aos="fade-out" data-aos-duration="1500" data-aos-once="true">Lorem Ipsum is simply dummy text of the printing and 
                 typesetting industry.
                Lorem Ipsum has been the industry's</p>
                </div>
               <div className="card-holder">
                   <div className="card">
                       <img src={contentOneImg} alt="Hicing Iamge" className="card__img" />
                       <div className="card-content">
                           <h1 className="card-name">lorem ipsum</h1>
                           <p>Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                                <span className={readMore ? "card__read-more--open" : "card__read-more"}>
                                    Lorem ipsum, 
                                    dolor sit amet consectetur adipisicing elit.
                                     Dicta ipsa laudantium quo sed. Pariatur commodi,
                                      quis laboriosam similique id est ut rerum eos. 
                                    Reiciendis quas voluptatibus optio eum similique explicabo?
                                </span>
                                <p onClick ={handelReadMore} className="read-more-btn open">{ readMore ? "READ LESS..." : "READ MORE..."}</p>
                                </p>
                       </div>

                   </div>
                   <div className="card">
                       <img src={contentTwoImg} alt="Hicing Iamge" className="card__img" />
                       <div className="card-content">
                           <h1 className="card-name">lorem ipsum</h1>
                           <p>Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                                <span className={readMoreTwo ? "card__read-more--open" : "card__read-more"}>
                                    Lorem ipsum, 
                                    dolor sit amet consectetur adipisicing elit.
                                     Dicta ipsa laudantium quo sed. Pariatur commodi,
                                      quis laboriosam similique id est ut rerum eos. 
                                    Reiciendis quas voluptatibus optio eum similique explicabo?
                                </span>
                                <p onClick ={handelReadMoreTwo} className="read-more-btn open">{ readMoreTwo ? "READ LESS..." : "READ MORE..."}</p>
                                </p>
                       </div>
                   </div>
                   <div className="card">
                       <img src={contentThirdImg} alt="Hicing Iamge" className="card__img" />
                       <div className="card-content">
                           <h1 className="card-name">lorem ipsum</h1>
                           <p>Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                                <span className={readMoreThird? "card__read-more--open" : "card__read-more"}>
                                    Lorem ipsum, 
                                    dolor sit amet consectetur adipisicing elit.
                                     Dicta ipsa laudantium quo sed. Pariatur commodi,
                                      quis laboriosam similique id est ut rerum eos. 
                                    Reiciendis quas voluptatibus optio eum similique explicabo?
                                </span>
                                <p onClick ={handelReadMoreThird} className="read-more-btn open">{ readMoreThird ? "READ LESS..." : "READ MORE..."}</p>
                                </p>
                       </div>
                   </div>
                   <div className="shadow-container">
                       <img src={shadowImg} alt="shadow__img"  className="shadow"/>
                   </div>
               </div>
               <div className="show">
                       <div className="show-container">
                       
                        <Link
                        to="show"
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="show-btn">SHOW MORE
                        </Link>
                </div>
             </div>
         </div>
        </div>
    )
}

export default MenuBlog;
