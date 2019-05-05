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
          onClick={props.retrievePeople}
          value="PEOPLE"
        />
        <input
          type="submit"
          className="planets"
          onClick={props.retrievePlanets}
          value="PLANETS"
        />
        <input
          type="submit"
          className="vehicles"
          onClick={props.retrieveVehicles}
          value="VEHICLES"
        />
      </div>
    </header>
  );
};

export default Header;
