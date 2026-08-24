import React from "react";

const Footer = () => 
{
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <figure>
                    <a href="/" className="logo__figure"><i className="fa-solid fa-book logo"></i><span className="logo__text">Library</span></a>
                    </figure>
                    <p className="moto text--blue">
                        Reading Made Accessible
                    </p>
                    <div className="footer__list">
                       <a href="/" className="footer__link">Home</a> 
                       <a href="#highlights" className="footer__link">About</a> 
                       <a href="/vault" className="footer__link">Books</a> 
                       <a href="/" className="footer__link">Contact</a> 
                    </div>
                    <div className="footer__copyright"><span className="text--blue">&copy;</span> Copyright Library 2026</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;