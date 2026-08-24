import React from "react";
import { useState } from "react";

export function generateRatingStars(rating) {
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

export function PriceDisplay({ originalPrice, salePrice }) {
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

export function hasValidPoster(img) {
    return img && img !== "N/A";
}

export function BookPoster({ book, isSpecial = false }) {
    const [failed, setFailed] = useState(false);
    const cardClass = `book__card${isSpecial ? " book__card--special" : ""}`;

    if (!hasValidPoster(book.url) || failed) {
        return (
            <div className={`${cardClass} book__card--placeholder`}>
                <i className={`fa-solid fa-circle-info book__card--placeholder--logo`}></i>
                <span>{book.title}</span>
                <p className="book__card--loading-error">Failed to Load Image</p>
            </div>
        );
    }

    return (
        <img
            src={book.url}
            alt={book.title}
            className={cardClass}
            data-title={book.title}
            onError={() => setFailed(true)}
        />
    );
}

export function getRelatedBooks(allBooks, currentBook, count = 5) {
    const pool = allBooks.filter((b) => b.id !== currentBook.id);

    const sameGenre = shuffle(
        pool.filter((b) => b.genre === currentBook.genre)
    );

    if (sameGenre.length >= count) {
        return sameGenre.slice(0, count);
    }

    // Not enough genre matches, so we'll fill the rest with random picks from the remaining pool
    const usedIds = new Set(sameGenre.map((b) => b.id));
    const remaining = shuffle(pool.filter((b) => !usedIds.has(b.id)));

    return [...sameGenre, ...remaining].slice(0, count);
}

function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}