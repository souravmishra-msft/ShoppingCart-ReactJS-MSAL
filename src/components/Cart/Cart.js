import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { TbCurrencyRupee } from 'react-icons/tb';
import CartContext from '../../CartContext';
import './Cart.css';
import SignInButton from '../SignInSignOutBtns/SignInButton';


export const Cart = () => {
    const { items, removeFromCart, addToCart } = useContext(CartContext);

    const totalPrice = items.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className="cart-items">
            <AuthenticatedTemplate>
                <div className="cart-items-header">Cart Items</div>
                {items.length === 0 && (
                    <div className="cart-items-empty">
                        <p>Your cart is empty.</p>
                        <Link to={'/'} ><button className="cart-items-continue-shopping-btn">Continue Shopping</button></Link>
                    </div>
                )}

                <div>
                    {items.map((item, index) => (

                        <div className="cart-items-list" key={index}>
                            <img className='cart-items-image' src={item.img} alt={item.name} />
                            <div className="cart-items-name">{item.name}</div>
                            <div className="cart-items-function">
                                <button className="cart-items-remove" onClick={() => removeFromCart(item)}>-</button>
                                {/* <div className="cart-items-quantity">{item.quantity}</div> */}
                                <input type="text" className="cart-items-quantity" value={item.quantity} readOnly />
                                <button className="cart-items-add" onClick={() => addToCart(item)}>+</button>
                            </div>
                            <div className="cart-items-price">
                                <TbCurrencyRupee /> {item.quantity * item.price}
                            </div>
                        </div>
                    ))}
                </div>

                {totalPrice > 0 && (
                    <div className="cart-items-total-price-name">
                        Total Price
                        <div className="cart-items-total-price"><TbCurrencyRupee /> {totalPrice}</div>
                    </div>
                )}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div className="cart-items-header">Cart Items</div>
                <div className="cart-items-empty">
                    <p>Please login to view your cart.</p>
                    <Link to={'/'} ><SignInButton /></Link>
                </div>
            </UnauthenticatedTemplate>
        </div>

    )
}
