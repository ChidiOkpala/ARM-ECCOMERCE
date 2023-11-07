import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("CART")) || [];

        setCartItems(cart);
    }, []);

    const handleUpdateCart = (newCart) => {
        setCartItems(newCart);

        localStorage.setItem("CART", JSON.stringify(newCart));
    };

    const itemIsInCart = (id) => {
        return cartItems.find(item => item.id == id)
    };

    const handleAddToCart = (product) => {
        if (itemIsInCart(product.id)) {
            toast("Item already added to cart...");
        } else {
            const updatedCart = [...cartItems, { ...product, quantity: 1 }];

            handleUpdateCart(updatedCart);
        };
    };

    const removeFromCart = (id) => {
        const updatedItems = cartItems.filter(items => items.id != id);

        handleUpdateCart(updatedItems);
    };

    const increaseItemQuantity = (id) => {
        const updatedItems = cartItems.map(items => {
            if (id == items.id) {
                return { ...items, quantity: items.quantity + 1 }
            } else {
                return { ...items }
            };
        });

        handleUpdateCart(updatedItems);
    };

    const decreaseItemQuantity = (id) => {
        const cartItem = cartItems.find(items => items.id == id);

        if (cartItem.quantity == 1) {
            removeFromCart(id);
        } else {
            const updatedItems = cartItems.map(items => {
                if (id == items.id) {
                    return { ...items, quantity: items.quantity - 1 };
                } else {
                    return { ...items };
                };
            });
    
            handleUpdateCart(updatedItems);
        };
    };

    return {
        cartItems,
        handleAddToCart,
        removeFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
    };
};

export default useCart;
