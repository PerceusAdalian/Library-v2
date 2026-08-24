import React, { useMemo } from "react";
import { books } from "../data.js";
import { generateRatingStars, PriceDisplay, getRelatedBooks, BookPoster } from "../utils/bookHelpers.jsx";
import { Link } from "react-router-dom";

const Related = ({ book }) => {
    const relatedBooks = useMemo(() => getRelatedBooks(books, book, 4), [book]);

    if (relatedBooks.length === 0) return null;

    return (
        <section id="related">
            <div className="container">
                <div className="row">
                    <div className="books__header">
                        <h2 className="section__title">
                            You Might Also <span className="text--blue">Like</span>
                        </h2>
                    </div>
                    <div className="books__rendered books">
                        {relatedBooks.map((related) => (
                            <div className="book" key={related.id}>
                                <figure className="book__card--wrapper">
                                    <Link to={`/vault/${related.id}`}>
                                        <BookPoster book={related} />
                                    </Link>
                                </figure>
                                <div className="book__description">
                                    <Link to={`/vault/${related.id}`} className="book__title">
                                        {related.title}
                                    </Link>
                                    <div className="book__ratings">{generateRatingStars(related.rating)}</div>
                                    <div className="book__price">
                                        <PriceDisplay
                                            originalPrice={related.originalPrice}
                                            salePrice={related.salePrice}
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
};

export default Related;