import React from 'react';
import './MainCarousel.css';
import personOne from '../../images/person-one.jpg';
import personTwo from '../../images/person-two.jpg';
import personThree from '../../images/person-three.jpg';
import personFour from '../../images/person-four.jpg';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs';
import shadowImg from '../../images/Shadow.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MainCarousel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 6000, min: 3000 },
            items: 1,
            slidesToSlide: 1 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

      const CustomRightArrow = ({ onClick, ...rest}) =>{
          const {
              onMove,
              CarouselState: { currentSlide, deviceType}
          } = rest;
          return <button onclick = {() => onClick()} />
      }
      const CustomLefttArrow = ({ onClick, ...rest}) =>{
        const {
            onMove,
            CarouselState: { currentSlide, deviceType}
        } = rest;
        return <button onclick = {() => onClick()} />
    };
    return (
        <div className="scroll-pricing">
        <div className='main-carousel'>
            <Carousel
                       swipeable={true}
                       draggable={true}
                       showDots={true}
                       autoplay={true}
                       ssr={true}
                       infinite={true}
                       customRightArrow={<BsArrowRightShort className="carousel-icons right" />}
                       customLeftArrow={<BsArrowLeftShort className="carousel-icons left" />}
                       responsive={responsive}
                       autoPlaySpeed={2000}
                       transitionDuration={1000}
                       containerClass="carousel-container"
                       dotListClass="custom-dot-list-style"
                       itemClass="carousel-item-padding-40-px"
                       removeArrowOnDeviceType={["tablet", "mobile"]}
                       className="carousel" 
                       >
                        <div className="carousel-content">
                        <img src={personOne} alt="person one" className="carousel-img" />
                        <h3 className="person-name">Kelly Sikkema</h3>
                        <div className="carousel-text">
                        <p>
                        Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s,
                        </p>
                        </div>
                                
                    </div>
                    <div className="carousel-content">
                    <img src={personTwo} alt="person one" className="carousel-img" />
                    <h3 className="person-name">Christopher Campbell</h3>
                    <div className="carousel-text">
                    <p>
                    Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry. 
                    Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                                
            </div>
                        <div className="carousel-content">
                        <img src={personThree} alt="person one" className="carousel-img" />
                        <h3 className="person-name">Sergio De Paula</h3>
                        <div className="carousel-text">
                        <p>
                            Lorem Ipsum is simply dummy text of 
                            the printing and typesetting industry. 
                            Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s,
                                </p>
                                </div>
                            </div>
                            <div className="carousel-content">
                                <img src={personFour} alt="person one" className="carousel-img" />
                                <h3 className="person-name">Criag Mckay</h3>
                                <div className="carousel-text">
                                    <p>
                                    Lorem Ipsum is simply dummy text of 
                                    the printing and typesetting industry. 
                                    Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                                
                            </div>
                        </Carousel>
                        <img src={shadowImg} alt="shadow" className="shadow-carousel" />
        </div>
        </div>
    )
}

export default MainCarousel
