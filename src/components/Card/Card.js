import React, { useContext } from 'react';
import { TbCurrencyRupee } from 'react-icons/tb';
import { MdShoppingCart } from 'react-icons/md';
import { AuthenticatedTemplate, UnauthencatedTemplate } from '@azure/msal-react';
import './Card.css';
import CartContext from '../../CartContext';


const Card = ({ itemId, name, price, image }) => {
    const { addToCart } = useContext(CartContext);
    const product = {
        id: itemId,
        name,
        price,
        img: image
    }

    return (
        <div className="card">
            <img className="product-image" src={image} alt={name} />
            <hr />
            <div className="product-name">
                <h3>{name}</h3>
            </div>
            <div className="product-price"><TbCurrencyRupee /> {price}</div>
            <AuthenticatedTemplate>
                <button className="product-addToCart-btn" onClick={() => addToCart(product)}><MdShoppingCart /> Add to Cart</button>
            </AuthenticatedTemplate>
        </div>
    )
}

export default Card