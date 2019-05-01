import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header>
      <div className="top-nav" />
      <hr />
      <div className="button-container">
        <input
          type="submit"
          className="people"
          onClick={props.renderPeople}
          value="PEOPLE"
        />
        <input
          type="submit"
          className="planets"
          onClick={props.renderPlanets}
          value="PLANETS"
        />
        <input
          type="submit"
          className="vehicles"
          onClick={props.renderVehicles}
          value="VEHICLES"
        />
      </div>
    </header>
  );
};

export default Header;
