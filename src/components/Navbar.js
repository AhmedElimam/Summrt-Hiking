import React, { useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from './images/logo.png';
import { CgMenuRound } from 'react-icons/cg';
import { FaTimesCircle } from 'react-icons/fa';
import Regstier from './pages/Signin/Regstier';

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [link, setLink] = useState(false);

    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    const changeLink = () =>{
        if(window.scrollY >= 80){
            setLink(true);
        }
        else{
            setLink(false);
        }
    };

    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };
    useEffect(() => {
        closeMobileMenu();
    }, []);
    window.addEventListener('resize', closeMobileMenu);

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeLink);

    return (
        <div className={navbar ? 'navbar unactive' : 'navbar'}>
            <div className="navbar__container container">
                <div className="logo">
                    <Link to='hero'
                    activeClass='scroll-active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000}>
                    <img src={Logo} alt="hicking_logo" className='nav__logo' onClick={closeMobileMenu}/>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handelClick}>
                    {click ? <FaTimesCircle /> :  <CgMenuRound />}
                </div>
                    <ul className={click ? 'nav-menu active unactive' : 'nav-meu'}>
                        <li className='nav-item'>
                    <Link to="menu"
                    activeClass='scroll-active'
                    spy={true}
                    smooth={true}
                    offset={-37}
                    duration={1000}
                    className={link ? "link active" : "link-item"}
                    onClick={closeMobileMenu}
                    >
                        MENU
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="blog-app"
                    activeClass='scroll-active'
                    spy={true}
                    smooth={true}
                    offset={-37}
                    duration={1000}
                    className={link ? "link active" : "link-item"}
                    onClick={closeMobileMenu}
                    >
                        OUR BLOG
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="plans-scroll"
                    activeClass='scroll-active'
                    spy={true}
                    smooth={true}
                    offset={-37}
                    duration={1000}
                    className={link ? "link active" : "link-item"}
                    onClick={closeMobileMenu}
                    >
                        PLANS
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link 
                    activeClass='scroll-active'
                    spy={true}
                    smooth={true}
                    offset={30}
                    duration={2500} to='conact-scroll' className={link ? "link active" : "link-item"}
                    onClick={closeMobileMenu}
                    >
                        CONTACT US
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <a href='/Regstier' className={link ? "link active singup" : "link-item signup"}
                    onClick={closeMobileMenu}>
                        CREATE FREE ACCOUNT
                    </a>
                    </li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar
