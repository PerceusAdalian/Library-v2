import React from "react";
import { Link } from "react-router-dom";

const Footer = () => 
{
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <figure>
                    <Link to="#" className="logo__figure" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> 
                        <i className="fa-solid fa-book logo"></i><span className="logo__text">Library</span>
                    </Link>
                    </figure>
                    <p className="moto text--blue">
                        Reading Made Accessible
                    </p>
                    <div className="footer__list">
                       <Link to="/" className="footer__link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> 
                            Home
                       </Link>
                       <Link to="/#highlights" className="footer__link">
                            About
                        </Link> 
                       <Link to="/vault" className="footer__link">Books</Link> 
                       <Link to="/" className="footer__link">Contact</Link> 
                    </div>
                    <div className="footer__copyright"><span className="text--blue">&copy;</span> Copyright Library 2026</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;