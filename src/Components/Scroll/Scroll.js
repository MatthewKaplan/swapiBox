import React from "react";
import "./Scroll.css";

const Scroll = ({ movie }) => {
  return (
    <section className="scrollContainer">
      <p className="openingText">
        {" "}
        A long time ago in a galaxy far, far away....
      </p>
      <section className="logo">
        <img src={require("../../assets/logo.svg")} alt="Star Wars Logo" />
      </section>
      <div id="board">
        <div id="content">
          <p id="title">{movie.releaseDate}</p>
          <p id="subtitle">{movie.title}</p>
          <br />
          <p>{movie.summary}</p>
        </div>
      </div>
    </section>
  );
};

export default Scroll;
