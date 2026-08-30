import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useCart();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav>
            <div className={`nav__container${menuOpen ? ' menu--open' : ''}`}>
                <figure>
                    <Link to="#footer" className="logo__figure" onClick={() => 
                        {
                            const el = document.getElementById("footer");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}>
                        <i className="fa-solid fa-book logo"></i>
                        <span className="logo__text">Library</span>
                    </Link>
                </figure>
                <div className="nav__links--wrapper">
                    <ul className="nav__links">
                        <li><Link to="/" className="nav__link link__hover-effect">Home</Link></li>
                        <li><a href="#contact" className="nav__link link__hover-effect contact-trigger">Contact</a></li>
                        <li><Link to="/vault" className="nav__link nav__link--primary">Vault</Link></li>
                        <Link to="/cart" className="cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            {itemCount > 0 && (
                                <span className="cart__badge">{itemCount}</span>
                            )}
                        </Link>
                    </ul>
                    
                    <div className="menu__container">
                        <button type="button" className="btn__menu" onClick={() => setMenuOpen(true)}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="menu__backdrop">
                            <button type="button" className="btn__menu btn__menu--close" onClick={() => setMenuOpen(false)}>
                                <i className="fas fa-times"></i>
                            </button>
                            <ul className="menu__links">
                                <li className="menu__list">
                                    <Link to="/" className="menu__link link__hover-effect" onClick={() => 
                                        {
                                            setMenuOpen(false);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                    > Home
                                    </Link>
                                </li>
                                <li className="menu__list">
                                    <Link to="/vault" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Books</Link>
                                </li>
                                <li className="menu__list">
                                    <Link to="/cart" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>
                                        Shopping Cart
                                        {itemCount > 0 && (
                                            <span className="cart__badge">{itemCount}</span>
                                        )}
                                    </Link>
                                </li>
                                <li className="menu__list">
                                    <a href="#contact" className="menu__link link__hover-effect contact-trigger" onClick={() => setMenuOpen(false)}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;