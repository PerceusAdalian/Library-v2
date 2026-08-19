import React from "react";
import { books } from "../data.js";
import { generateRatingStars, PriceDisplay } from "../utils/bookHelpers.jsx";

const Featured = () => {
    const featuredBooks = books
        .filter((book) => Math.floor(book.rating) === 5)
        .slice(0, 4);

    return (
        <section id="featured">
          <div className="container">
            <div className="row">
                <div className="books__header">
                    <h2 className="section__title">
                        Our Top Favorite <span className="text--blue">Books</span>
                    </h2>
                </div>
                <div className="books__rendered books">
                    {featuredBooks.map((book) => (
                        <div className="book" key={book.id}>
                            <figure className="book__card--wrapper">
                                <img src={book.url} alt={book.title} className="book__card" />
                            </figure>
                            <div className="book__description">
                                <button type="button" className="book__title">
                                    {book.title}
                                </button>
                                <div className="book__ratings">{generateRatingStars(book.rating)}</div>
                                <div className="book__price">
                                    <PriceDisplay
                                        originalPrice={book.originalPrice}
                                        salePrice={book.salePrice}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
    );
}

export default Featured;