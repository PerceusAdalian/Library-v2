import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                        <li><Link to="/" className="nav__link link__hover-effect">Home</Link></li>
                        <li><Link className="nav__link link__hover-effect">Contact</Link></li>
                        <li><Link to="/vault" className="nav__link nav__link--primary">Books</Link></li>
                    </ul>
                    <div className="menu__container">
                        <Link className="btn__menu" onClick={() => setMenuOpen(true)}>
                            <i className="fas fa-bars"></i>
                        </Link>
                        <div className="menu__backdrop">
                            <Link className="btn__menu btn__menu--close" onClick={() => setMenuOpen(false)}>
                                <i className="fas fa-times"></i>
                            </Link>
                            <ul className="menu__links">
                                <li className="menu__list">
                                    <Link to="/" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Home</Link>
                                </li>
                                <li className="menu__list">
                                    <Link to="/vault" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Books</Link>
                                </li>
                                <li className="menu__list">
                                    <Link className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Contact</Link>
                                </li>
                                <li className="menu__list">
                                    <Link to="/cart" className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Shopping Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/cart" className="cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;