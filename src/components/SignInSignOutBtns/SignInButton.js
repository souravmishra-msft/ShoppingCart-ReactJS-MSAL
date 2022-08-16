import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../AuthConfig';
import './SignInSignOutButton.css';


const handleLogin = (instance) => {
    instance.loginRedirect(loginRequest)
        .catch(e => {
            console.error(e);
        });
}

const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <button className="login-btn" onClick={() => handleLogin(instance)}>Login</button>
    )
}

export default SignInButton