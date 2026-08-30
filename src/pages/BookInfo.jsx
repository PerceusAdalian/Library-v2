import React from 'react'
import { Link, useParams } from "react-router-dom";
import { generateRatingStars, PriceDisplay, BookPoster } from "../utils/bookHelpers.jsx";
import Related from '../components/Related.jsx';
import { useCart } from "../components/CartContext";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

export default function BookInfo({ books }) {
    const { id } = useParams();
    const book = books.find((b) => String(b.id) === id);
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
        }, 750);
    }

    if (!book) {
        return (
            <div id="books__body">
                <div className="books__main">
                    <div className="books__container">
                        <div className="row">
                            <div className="books__selected--top">
                                <Link to="/vault">
                                    <i className="fa-solid fa-arrow-left logo"></i>
                                </Link>
                            </div>
                            <p>That book doesn't exist.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="books__body">
            <div className="books__main">
              <section id="vault">
                <div className="books__container">
                    <div className="row">
                      <div className="row">
                        <div className="books__selected--top">
                            <Link to="/vault">
                                <i className="fa-solid fa-arrow-left logo"></i>
                            </Link>
                            <h1 className="section__title">Book Preview: <span className="text--blue">{book.title}</span></h1>
                        </div>
                      </div>

                      <div className="book__wrapper--focus">
                        <div className="book__focus">
                          <div className="book" key={book.id}>
                            <figure className="book__card--wrapper">
                                <Link to={`/vault/${book.id}`}>
                                    <BookPoster book={book} isSpecial={"true"} />
                                </Link>
                            </figure>
                            <div className="book__description">
                              <div className="book__title--special">
                                  {book.title}
                              </div>
                              <div className="book__ratings">{generateRatingStars(book.rating)}</div>
                              <div className="book__price">
                                <PriceDisplay
                                  originalPrice={book.originalPrice}
                                  salePrice={book.salePrice}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="book__focus--description">
                          <div className="divider"></div>
                          <h1>Description</h1>
                          <p>
                            Author: <span className="text--blue" style={{fontWeight: '700'}}>{book.author}</span> | Genre: <span className="text--blue" style={{fontWeight: '700'}}>{book.genre}</span>
                            <br />
                            Release Year: <span className="text--blue" style={{fontWeight: '700'}}>{book.publishedYear}</span> | Pages: <span className="text--blue" style={{fontWeight: '700'}}>{book.pages}</span>
                            <br />
                            Brief: <span className="text--blue" style={{fontWeight: '700'}}>{book.description}</span>
                          </p>
                          <div className="divider"></div>
                          <div className="add-to-cart">
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
                    </div>
                    <Related book={book} />
                </div>
              </section>
            </div>
        </div>
    );
}