import React from 'react';
import { useMsal } from '@azure/msal-react';
import { MdLogin } from 'react-icons/md';
import { loginRequest } from '../../AuthConfig';
import './SignInSignOutButton.css';


const handleLogin = (instance) => {
    instance.loginRedirect(loginRequest)
        .catch(e => {
            console.error(e);
        });
}

const SignInButtonHeader = () => {
    const { instance } = useMsal();

    return (
        <button className="login-header-btn" onClick={() => handleLogin(instance)}><MdLogin /></button>
    )
}

export default SignInButtonHeader
