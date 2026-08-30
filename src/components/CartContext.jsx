import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(bookId, quantity = 1) {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === bookId);
            if (existing) {
                return prev.map((item) =>
                    item.id === bookId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { id: bookId, quantity }];
        });
    }

    function updateQuantity(bookId, quantity) {
        if (quantity <= 0) {
            removeFromCart(bookId);
            return;
        }
        setCart((prev) =>
            prev.map((item) => (item.id === bookId ? { ...item, quantity } : item))
        );
    }

    function removeFromCart(bookId) {
        setCart((prev) => prev.filter((item) => item.id !== bookId));
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}