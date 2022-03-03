import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/signup image.png";
import "./Login.css";

const Login = () => {
    const {handleGoogleSignIn} = useAuth();
    return (
        <div className="sign-up">
            <div className="img-container">
                <img src={logo} alt={logo} />
            </div>
            <form>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Login" id="signup-btn"/>
            </form>
            <div className="third-party-login">
                <p>------Or Login using------</p>
                <button className="google-btn" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle}/> Google</button>
                {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
            </div>
            <Link to="/signUp">Don't have an account</Link>
        </div>
    );
};

export default Login;