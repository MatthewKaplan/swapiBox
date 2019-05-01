import React from "react";
import "./Header.scss";

const Header = props => {
  return (
    <header className="headerContainer">
      <div className="topNav" />
      <hr />
      <div className="buttonContainer">
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
