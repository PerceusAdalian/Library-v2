import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <li><Link className="nav__link link__hover-effect">Contact</Link></li>
                        <li><Link to="/vault" className="nav__link nav__link--primary">Vault</Link></li>
                        <Link to="/cart" className="cart">
                            <i class="fa-solid fa-cart-shopping"></i>
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
                                    <Link to="/" className="nav__link link__hover-effect" onClick={() => 
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
                                    <Link className="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Contact</Link>
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