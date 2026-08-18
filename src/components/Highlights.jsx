import React from "react";

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="text--blue">Library</span>?
                    </h2>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                                <i className="fa-solid fa-bolt-lightning" style={{ color: "#006efd" }}></i>
                            </div>
                            <h3 className="highlight__subtitle">
                                Easy and Quick
                            </h3>
                            <p className="highlight__paragraph">
                                Get access to the book you purchased online instantly.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <i className="fa-solid fa-book-open" style={{ color: "#006efd" }}></i>
                            </div>
                            <h3 className="highlight__subtitle">
                                Over 10,000+ Books
                            </h3>
                            <p className="highlight__paragraph">
                                <span className="text--blue" style={{ fontWeight: "bold" }}>Library</span> has books in all your favourite categories.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <i className="fa-solid fa-tags" style={{ color: "#006efd" }}></i>
                            </div>
                            <h3 className="highlight__subtitle">
                                Affordable
                            </h3>
                            <p className="highlight__paragraph">
                                Get your hands on popular books for as little as $10.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;