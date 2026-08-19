import React from "react";
import { books } from "../data.js";
import { generateRatingStars, PriceDisplay } from "../utils/bookHelpers.jsx";

const DiscountedBooks = () => {
    const discountedBooks = books
        .filter((book) => book.salePrice !== null)
        .slice(0, 8);

    return (
        <section id="discounted">
          <div className="container">
            <div className="row">
                <div className="books__header">
                    <h2 className="section__title">
                        Discounted <span className="text--blue">Books</span>
                    </h2>
                </div>
                <div className="books__rendered books">
                    {discountedBooks.map((book) => (
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

export default DiscountedBooks;