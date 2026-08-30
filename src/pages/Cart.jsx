import React from "react";
import { useCart } from "../components/CartContext";
import { books } from "../data.js";
import { PriceDisplay } from "../utils/bookHelpers.jsx";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();

    const cartItems = cart
        .map((item) => {
            const book = books.find((b) => b.id === item.id);
            return book ? { ...book, quantity: item.quantity } : null;
        })
        .filter(Boolean);

    function unitPrice(book) {
        return book.salePrice !== null ? book.salePrice : book.originalPrice;
    }

    const subtotal = cartItems.reduce(
        (sum, book) => sum + unitPrice(book) * book.quantity,
        0
    );
    const TAX_RATE = 0.081;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return (
        <div id="books__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="section__title">Cart</h2>
                        </div>

                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__hook">Book</span>
                                <span className="cart__hook">Quantity</span>
                                <span className="cart__hook">Price</span>
                            </div>
                            <div className="cart__body">
                                {cartItems.length === 0 ? (
                                    <p className="cart__empty">Your cart is empty.</p>
                                ) : (
                                    cartItems.map((book) => (
                                        <div className="cart__item" key={book.id}>
                                            <div className="cart__book">
                                                <img
                                                    src={book.url}
                                                    alt={book.title}
                                                    className="cart__book--img"
                                                />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">
                                                        {book.title}
                                                    </span>
                                                    <span className="cart__book--price">
                                                        <PriceDisplay
                                                            originalPrice={book.originalPrice}
                                                            salePrice={book.salePrice}
                                                        />
                                                    </span>
                                                    <button
                                                        className="cart__book--remove"
                                                        onClick={() => removeFromCart(book.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={99}
                                                    className="cart__input"
                                                    value={book.quantity}
                                                    onChange={(e) =>
                                                        updateQuantity(
                                                            book.id,
                                                            Number(e.target.value)
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="cart__total">
                                                ${(unitPrice(book) * book.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button
                                className="btn btn__checkout no-cursor"
                                onClick={() =>
                                    alert("This feature isn't implemented yet. Sorry!")
                                }
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}