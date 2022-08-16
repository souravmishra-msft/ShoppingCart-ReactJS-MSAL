import React from 'react';
import { Link } from 'react-router-dom';
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from '../../AuthConfig';
import './Login.css';


const Login = () => {

    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    console.log(isAuthenticated);
    const handleLogin = (instance) => {
        instance.loginRedirect(loginRequest)
            .catch(e => {
                console.error(e);
            });
    }

    const handleLogout = (instance) => {
        instance.logoutRedirect()
            .catch(e => {
                console.error(e);
            });
    }

    return (
        <div className="login">
            {isAuthenticated ?
                <div className='btn-group'>
                    <h3>Login with you Organization Account</h3>
                    <button className="login-btn" onClick={() => handleLogin(instance)}>Login</button>
                </div> :
                <div className='btn-group'>
                    <h3>Successfully Logged In</h3>
                    <Link to={'/'} ><button className="home-btn">Continue Shopping</button></Link>
                    <button className="logout-btn" onClick={() => handleLogout(instance)}>Logout</button>
                </div>
            }
        </div>
    )
}

export default Login
