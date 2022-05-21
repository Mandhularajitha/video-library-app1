import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section>
        <div className="banner">
          <div className="navbar"></div>

          <div className="content">
            <h1 className="title_container">Watch Programming vedios</h1>
            <p>
              Watch more different Programming Vedios and improve Your Skills
            </p>
            <div>
              <Link to="/">
                <button className="home_btn" type="button">
                  <span className="watch_btn"></span>Watch More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
