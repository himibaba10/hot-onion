import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
    const {user, handleSignOut} = useAuth();
    return (
        <header className="header">
            <div className="img-container">
                <Link to="/"><img src={logo} alt="Hot Onion" /></Link>
            </div>
            <div className="nav-container">
                <Link to="/shop">Shop</Link>
                <Link to="/cart"><FontAwesomeIcon className="cart-icon" icon={faShoppingCart} /></Link>
                {!user ?
                <>
                    <Link to="/login">Login</Link>
                    <Link className="sign-up" to="/signUp">Sign up</Link>
                </> :
                <>  
                    {/* <span>{user.displayName}</span> */}
                    <img src={user?.photoURL} alt="" />
                    <button className="sign-up-btn" onClick={handleSignOut}>Log Out</button>
                </>
                }
            </div>
        </header>
    );
};

export default Header;