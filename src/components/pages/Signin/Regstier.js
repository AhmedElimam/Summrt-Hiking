import React from 'react';
import './Regstier.css';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Regstier() {
    return (
        <div className="Regstier">
            <div className="Regstier-conatiner">
            <Link to="/">
            <img src={Logo} alt="hicking_logo" className='Regstier__logo'/>
             </Link>
             <div className="label-text">
                 <h2>CREATE ACCOUNT</h2>
             </div>
             <form action="">
                 <div className="inputs">
                     <input type="text" name="username"  autoComplete="off" className="input-item" placeholder="Full Name" />
                     <input type="password" name="username" autoComplete="off" className="input-item" placeholder="Password" />
                     <input type="password" name="username" autoComplete="off" className="input-item" placeholder="Confert Password" />
                     <input type="email" name="username" autoComplete="off" className="input-item" placeholder="Email" />
                     <input type="text" name="username"  autoComplete="off" className="input-item" placeholder="Adress" />
                 </div>
                 <input type="submit" value="Creat Account" className="sub"/>
             </form>
             <p className="lable-sub">
                You Have ACCOUNT?
                 <Link>Login</Link>
             </p>
            </div>
        </div>
    )
}

export default Regstier
