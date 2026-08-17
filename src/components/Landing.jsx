import React from "react";
import img from "../assets/ReadingMain.svg";

const Landing = () => 
{
    return (
        <section id="landing">
            <header>
            <div class="header__container">
                <div class="header__description">
                    <h1 class="text--blue website__title">America's most awarded online library platform</h1>
                    <h2 class="website__subtitle">Find your dream book with <span class="text--blue">Library</span></h2>
                    <a href="#featured" class="btn">Browse Books</a>
                </div>
                <figure class="book__wrapper">
                    <div class="sparkles">
                        <i class="fa-solid fa-star sparkle sparkle--1" />
                        <i class="fa-solid fa-star sparkle sparkle--2" />
                        <i class="fa-solid fa-star sparkle sparkle--3" />
                        <i class="fa-solid fa-star sparkle sparkle--4" />
                    </div>
                    <img src={img} class="book__img" alt="" />
                </figure>
            </div>
        </header>
        </section>
    );
}

export default Landing;