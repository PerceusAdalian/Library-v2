import React, { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div class={`nav__container${menuOpen ? ' menu--open' : ''}`}>
                <figure>
                    <a href="#footer" class="logo__figure">
                        <i class="fa-solid fa-book logo"></i>
                        <span class="logo__text">Library</span>
                    </a>
                </figure>
                <div className="nav__links--wrapper">
                    <ul class="nav__links">
                        <li><a href="/" class="nav__link link__hover-effect">Home</a></li>
                        <li><a class="nav__link link__hover-effect">Contact</a></li>
                        <li><a href="/vault" class="nav__link nav__link--primary">Books</a></li>
                    </ul>
                    <div class="menu__container">
                        <a class="btn__menu" onClick={() => setMenuOpen(true)}>
                            <i class="fas fa-bars"></i>
                        </a>
                        <div class="menu__backdrop">
                            <a class="btn__menu btn__menu--close" onClick={() => setMenuOpen(false)}>
                                <i class="fas fa-times"></i>
                            </a>
                            <ul class="menu__links">
                                <li class="menu__list">
                                    <a href="/" class="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Home</a>
                                </li>
                                <li class="menu__list">
                                    <a href="/vault" class="menu__link link__hover-effect" onClick={() => setMenuOpen(false)}>Books</a>
                                </li>
                                <li class="menu__list">
                                    <a class="menu__link no-cursor" onClick={() => setMenuOpen(false)}>Contacts</a>
                                </li>
                                <li class="menu__list">
                                    <a href="/cart" className="menu__link no-cursor" onClick={() => setMenuOpen(false)}>Shopping Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="/cart" className="cart"><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;