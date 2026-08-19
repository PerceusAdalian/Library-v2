import React from "react";

const Explore = () => 
{
    return (
        <section id="explore">
            <div className="container">
                <div className="row">
                    <div className="explore">
                        <h2 className="section__title">
                            Enter <span className="text--blue">The Vault</span>
                        </h2>
                        <div className="explore__description">
                            <p>
                                Are you ready to find your next read?
                            </p>
                        </div>
                        <a href="/vault" className="btn">Explore More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;