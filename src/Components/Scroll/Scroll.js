import React from "react";
import "./Scroll.css";

const Scroll = props => {
  return (
    <section className="scrollContainer">
      <p className="openingText">
        {" "}
        A long time ago in a galaxy far, far away....
      </p>
      <section className="logo">
        <img src={require("../../assets/logo.svg")} alt="Star Wars Logo" />
      </section>
    </section>
  );
};

export default Scroll;
