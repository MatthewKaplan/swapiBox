import React, { Component } from "react";
import "./Header.scss";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../../fetch";
import PropTypes from "prop-types";

class Header extends Component {
  handleClick(value) {
    if (value === "people") {
      return this.props.retrieveData(fetchPeople);
    } else if (value === "planets") {
      return this.props.retrieveData(fetchPlanets);
    } else {
      return this.props.retrieveData(fetchVehicles);
    }
  }

  render() {
    return (
      <header className="headerContainer">
        <div className="topNav" />
        <hr />
        <div className="buttonContainer">
          <input
            type="submit"
            className="people"
            onClick={() => this.handleClick("people")}
            value="PEOPLE"
          />
          <input
            type="submit"
            className="planets"
            onClick={() => this.handleClick("planets")}
            value="PLANETS"
          />
          <input
            type="submit"
            className="vehicles"
            onClick={() => this.handleClick("vehicles")}
            value="VEHICLES"
          />
        </div>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  retrieveData: PropTypes.func.isRequired
};
