import React from "react";
import img from "../assets/ReadingMain.svg";

const Landing = () => 
{
    return (
        <section id="landing">
            <header>
            <div className="header__container">
                <div className="header__description">
                    <h1 className="text--blue website__title">America's most awarded online library platform</h1>
                    <h2 className="website__subtitle">Find your dream book with <span className="text--blue">Library</span></h2>
                    <a href="#featured" className="btn">Browse Books</a>
                </div>
                <figure className="book__wrapper">
                    <div className="sparkles">
                        <i className="fa-solid fa-star sparkle sparkle--1" />
                        <i className="fa-solid fa-star sparkle sparkle--2" />
                        <i className="fa-solid fa-star sparkle sparkle--3" />
                        <i className="fa-solid fa-star sparkle sparkle--4" />
                    </div>
                    <img src={img} className="book__img" alt="" />
                </figure>
            </div>
        </header>
        </section>
    );
}

export default Landing;