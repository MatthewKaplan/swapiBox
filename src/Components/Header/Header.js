import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="top-nav" />
      <div className="button-container">
        <input type="submit" className="people" value="PEOPLE" />
        <input type="submit" className="planets" value="PLANETS" />
        <input type="submit" className="vehicles" value="VEHICLES" />
      </div>
    </header>
  );
};

export default Header;
