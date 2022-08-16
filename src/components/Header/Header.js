import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useIsAuthenticated, AuthenticatedTemplate } from '@azure/msal-react';
import { MdOutlineShoppingBag, MdHome } from 'react-icons/md';
import CartContext from '../../CartContext';
import SignInButtonHeader from '../SignInSignOutBtns/SignInButtonHeader';
import SignOutButtonHeader from '../SignInSignOutBtns/SignOutButtonHeader';
import './Header.css';



const Header = () => {

    const isAuthenticated = useIsAuthenticated();
    const { items } = useContext(CartContext);

    return (
        <header className="header">
            <div>
                <h1>
                    <Link to='/' className='logo'>Electronics Shoppe</Link>
                </h1>
            </div>
            <div className="header-links">
                <AuthenticatedTemplate>
                    <ul>
                        <li>
                            <Link to={'/'}>
                                <div className="home"><MdHome /></div>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>

                            <Link to={'/cart'} className='header-cart'>
                                <div className="cart">
                                    <MdOutlineShoppingBag />
                                    {items.length > 0 && <span>{items.length}</span>}
                                </div>
                            </Link>

                        </li>
                    </ul>
                </AuthenticatedTemplate>
                <ul>
                    <li>
                        {isAuthenticated ? <SignOutButtonHeader /> : <SignInButtonHeader />}
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header;
