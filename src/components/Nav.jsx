import React, { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className={`nav__container${menuOpen ? ' menu--open' : ''}`}>
                <figure>
                    <a href="#footer" className="logo__figure">
                        <i className="fa-solid fa-book logo"></i>
                        <span className="logo__text">Library</span>
                    </a>
                </figure>
                <div className="nav__links--wrapper">
                    <ul className="nav__links">
                        <li><a href="/" className="nav__link link__hover-effect">Home</a></li>
                        <li><a className="nav__link link__hover-effect">Contact</a></li>
                        <li><a href="/vault" className="nav__link nav__link--primary">Books</a></li>
                    </ul>
                    <div className="menu__container">
                        <a className="btn__menu" onClick={() => setMenuOpen(true)}>
                            <i className="fas fa-bars"></i>
                        </a>
                        <div className="menu__backdrop">
                            <a className="btn__menu btn__menu--close" onClick={() => setMenuOpen(false)}>
                                <i className="fas fa-times"></i>
                            </a>
                            <ul className="menu__links">
                                <li className="menu__list">
                                    <a href="/" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Home</a>
                                </li>
                                <li className="menu__list">
                                    <a href="/vault" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Books</a>
                                </li>
                                <li className="menu__list">
                                    <a className="menu__link no-cursor" onClick={() => setMenuOpen(false)}>Contacts</a>
                                </li>
                                <li className="menu__list">
                                    <a href="/cart" className="menu__link no-cursor" onClick={() => setMenuOpen(false)}>Shopping Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="/cart" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;