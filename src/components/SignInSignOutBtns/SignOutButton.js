import React from 'react';
import { useMsal } from '@azure/msal-react';
import { MdLogout } from 'react-icons/md';
import './SignInSignOutButton.css';

const handleLogout = (instance) => {
    instance.logoutRedirect()
        .catch(e => {
            console.error(e);
        });
}

const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <button className="logout-btn" onClick={() => handleLogout(instance)}><MdLogout /></button>
    )
}

export default SignOutButton
