import React, { useState } from 'react'
import { books as initialBooks } from "../data.js";
import { generateRatingStars, PriceDisplay } from "../utils/bookHelpers.jsx";
import img from "../assets/404.svg";

export default function Vault() {
    const [searchQuery, setSearchQuery] = useState("");
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

    function searchBooks(list, query) {
        if (!query) return list;
        const lowerQuery = query.toLowerCase();

        return list.filter((book) =>
            book.title?.toLowerCase().includes(lowerQuery)
        );
    }

    function handleSearchChange(event) {
        setSearchQuery(event.target.value);
    }

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }

    const displayedBooks = sortBooks(searchBooks(initialBooks, searchQuery), filter);

    return (
        <div id="books__body">
            <main id="books__main">
                <section id="vault">
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                              <h2 className="section__title">The Vault</h2>
                            </div>
                            <div className="books__selectors">
                              <input
                                type="text"
                                id="search-input"
                                className="books__search books__sorter"
                                placeholder="Search by Keyword, Book Title, and more.."
                                value={searchQuery}
                                onChange={handleSearchChange}
                              />
                              <select className="books__sorter" defaultValue="DEFAULT" value={filter} onChange={handleFilterChange}>
                                <option value="DEFAULT">Sort by...</option>
                                <option value="LOW_TO_HIGH">Price: Low to High</option>
                                <option value="HIGH_TO_LOW">Price: High to Low</option>
                                <option value="SALE">On Sale</option>
                                <option value="RATING">Rating</option>
                              </select>
                            </div>

                            {displayedBooks.length === 0 ? (
                              <div className="books__404">
                                <h1 className="books__404--text">No Results Found</h1>
                                <img src={img} alt="404 Book not found" />
                              </div>
                            ) : (
                              <div className="books__rendered books">
                                {displayedBooks.map((book) => (
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
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}