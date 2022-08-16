import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);



    const addToCart = (product) => {
        // console.log({ id, name, price, img });
        // setItems((prevState) => [...prevState, { id, name, price, img }]);

        console.log(product);
        /** Check if the item has previously been added to the items list */
        const itemExists = items.find((item) => item.id === product.id);
        if (itemExists) {
            setItems(items.map((item) => item.id === product.id ? { ...itemExists, quantity: itemExists.quantity + 1 } : item))
        } else {
            setItems([...items, { ...product, quantity: 1 }]);
        }
    };


    const removeFromCart = (product) => {
        const itemExists = items.find((item) => item.id === product.id);
        if (itemExists.quantity === 1) {
            setItems(items.filter((item) => item.id !== product.id));
        } else {
            setItems(items.map((item) => item.id === product.id ? { ...itemExists, quantity: itemExists.quantity - 1 } : item))
        }
    }


    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
}

export default CartContext;