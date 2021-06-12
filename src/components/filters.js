import React from "react";
import PropTypes from "prop-types";

function Filters(props) {
  let locations = props.list.map((puppy) => {
    return puppy.Location;
  });
  locations = [...new Set(locations)];
  let genders = props.list.map((puppy) => {
    return puppy.Gender;
  });
  genders = [...new Set(genders)];
  let breeds = props.list.map((puppy) => {
    return puppy.BreedName;
  });
  breeds = [...new Set(breeds)];
  let types = props.list.map((puppy) => {
    return puppy.PetType;
  });
  types = [...new Set(types)];

  return (
    <div className="filters">
      <span className="subtitle">
        <i className="fas fa-bars" /> <span>Filter By: </span>
      </span>
      <div className="filter">
        <span className="label">location</span>
        <div className="dropdown">
          <button className="dropdown-button">
            <span>
              All Locations <i className="fas fa-chevron-down" />
            </span>
          </button>
          <ul className="dropdown-content">
            <li>
              <label>
                <input type="checkbox" />
                <span>All Locations</span>
              </label>
            </li>
            {locations.map((location) => {
              return (
                <li>
                  <label>
                    <input type="checkbox" />
                    <span>{location}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  changeList: PropTypes.func,
  list: PropTypes.array,
};

export default Filters;
