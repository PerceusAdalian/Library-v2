import React, { useState } from "react";
import { books as initialBooks } from "../data.js";

function generateRatingStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
        } else {
            stars.push(<i key={i} className="fa-regular fa-star"></i>);
        }
    }
    return stars;
}

function PriceDisplay({ originalPrice, salePrice }) {
    if (salePrice !== null) {
        return (
            <>
                <span className="book__price--normal">${originalPrice.toFixed(2)}</span>{" "}
                ${salePrice.toFixed(2)} — <em style={{ color: "red", fontWeight: 700 }}>Sale!</em>
            </>
        );
    }
    return <>${originalPrice.toFixed(2)}</>;
}

const Books = () => {
    const [books, setBooks] = useState(initialBooks);
    const [filter, setFilter] = useState("");

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
        <div className="container">
            <div className="row">
                <div className="books__header">
                    <h2 className="section__title">
                        Featured <span className="text--blue">Books</span>
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
                    {books.map((book) => (
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
    );
};

export default Books;