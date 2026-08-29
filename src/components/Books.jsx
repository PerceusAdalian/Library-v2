import React, { useState } from "react";
import { books as initialBooks } from "../data.js";
import { generateRatingStars, PriceDisplay, BookPoster } from "../utils/bookHelpers.jsx";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

const Books = () => {
    const [books, setBooks] = useState(initialBooks);
    const [filter, setFilter] = useState("");
    const { addToCart } = useCart();
    const [addedIds, setAddedIds] = useState(new Set());

    function handleAddToCart(bookId) {
        addToCart(bookId, 1);
        setAddedIds((prev) => new Set(prev).add(bookId));
        setTimeout(() => {
            setAddedIds((prev) => {
                const next = new Set(prev);
                next.delete(bookId);
                return next;
            });
        }, 700);
    }

    function sortBooks(list, filterValue) {
        const sorted = [...list];

        if (filterValue === "LOW_TO_HIGH") {
            sorted.sort((a, b) => a.originalPrice - b.originalPrice);
        } else if (filterValue === "HIGH_TO_LOW") {
            sorted.sort((a, b) => b.originalPrice - a.originalPrice);
        } else if (filterValue === "SALE") {
            sorted.sort((a, b) => {
                if (a.salePrice === null) return 1;
                if (b.salePrice === null) return -1;
                return a.salePrice - b.salePrice;
            });
        } else if (filterValue === "RATING") {
            sorted.sort((a, b) => b.rating - a.rating);
        }

        return sorted;
    }

    function handleFilterChange(event) {
        const value = event.target.value;
        setFilter(value);
        setBooks(sortBooks(books, value));
    }

    return (
        
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="books__header">
                        <h2 className="section__title">
                            Recent <span className="text--blue">Additions</span>
                        </h2>
                        <select className="books__sorter" value={filter} onChange={handleFilterChange}>
                            <option value="">Sort by...</option>
                            <option value="LOW_TO_HIGH">Price: Low to High</option>
                            <option value="HIGH_TO_LOW">Price: High to Low</option>
                            <option value="SALE">On Sale</option>
                            <option value="RATING">Rating</option>
                        </select>
                    </div>

                    <div className="books__rendered books">
                        {books.map((book) => {
                            if (addedIds.has(book.id)) console.log("addedIds has:", book.id);

                            return (
                                <div className="book" key={book.id}>
                                    <figure className="book__card--wrapper">
                                        <Link to={`/vault/${book.id}`}>
                                            <BookPoster book={book} />
                                        </Link>
                                    </figure>
                                    <div className="book__description">
                                        <Link to={`/vault/${book.id}`} className="book__title">
                                            {book.title}
                                        </Link>
                                        <div className="book__ratings">{generateRatingStars(book.rating)}</div>
                                        <div className="book__price--row">
                                            <div className="book__price">
                                                <PriceDisplay
                                                    originalPrice={book.originalPrice}
                                                    salePrice={book.salePrice}
                                                />
                                            </div>
                                            <button className="btn btn__add-to-cart" onClick={() => handleAddToCart(book.id)}>
                                                <FontAwesomeIcon
                                                    icon={faCartShopping}
                                                    className={`btn__icon${addedIds.has(book.id) ? " btn__icon--hidden" : ""}`}
                                                />
                                                <FontAwesomeIcon
                                                    icon={faCheckToSlot}
                                                    className={`btn__icon btn__icon--check${addedIds.has(book.id) ? " btn__icon--visible" : ""}`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Books;