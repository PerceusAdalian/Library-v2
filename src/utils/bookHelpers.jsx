import React from "react";

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