import React from "react";

const Footer = () => 
{
    return (
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <figure>
                    <a href="#" class="logo__figure"><i class="fa-solid fa-book logo"></i><span class="logo__text">Library</span></a>
                    </figure>
                    <p class="moto text--blue">
                        Reading Made Accessible
                    </p>
                    <div class="footer__list">
                       <a href="#" class="footer__link">Home</a> 
                       <a href="#highlights" class="footer__link">About</a> 
                       <a href="#featured" class="footer__link">Books</a> 
                       <a class="footer__link no-cursor">Contact</a> 
                    </div>
                    <div class="footer__copyright"><span class="text--blue">&copy;</span> Copyright Library 2026</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;