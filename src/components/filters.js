import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

let useClickOutside = (handler, ref) => {
  useEffect(() => {
    let outsideHandler = (event) => {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", outsideHandler);

    return () => {
      document.removeEventListener("mousedown", outsideHandler);
    };
  });
};

function Filters(props) {
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 510px)` });

  const [showLocations, setShowLocations] = useState(false);
  const [showPetType, setShowPetType] = useState(false);
  const [showBreed, setShowBreed] = useState(false);
  const [showGender, setShowGender] = useState(false);

  const allPuppies = props.list;
  const changeFilteredPuppies = props.changeSortedList;

  const [locationSorter, setLocationSorter] = useState(["all locations"]);
  const [petTypeSorter, setPetTypeSorter] = useState(["all pet types"]);
  const [breedSorter, setBreedSorter] = useState(["all breeds"]);
  const [genderSorter, setGenderSorter] = useState(["all genders"]);

  let locations = props.list.map((puppy) => {
    return puppy.Location;
  });
  locations = [...new Set(locations)];

  let breeds = props.list.map((puppy) => {
    return puppy.BreedName;
  });
  breeds = [...new Set(breeds)].sort();

  let types = props.list.map((puppy) => {
    return puppy.PetType;
  });
  types = [...new Set(types)];

  let genders = props.list.map((puppy) => {
    return puppy.Gender;
  });
  genders = [...new Set(genders)];

  const [all, setAll] = useState([true, true, true, true]);
  const [locationCheckbox, setLocationCheckbox] = useState(
    new Array(locations.length).fill(false)
  );
  const [petTypeCheckbox, setPetTypeCheckbox] = useState(
    new Array(types.length).fill(false)
  );
  const [breedCheckbox, setBreedCheckbox] = useState(
    new Array(breeds.length).fill(false)
  );
  const [genderCheckbox, setGenderCheckbox] = useState(
    new Array(genders.length).fill(false)
  );

  let locationsDropdown = useRef();
  let petTypeDropdown = useRef();
  let breedsDropdown = useRef();
  let gendersDropdown = useRef();

  useClickOutside(() => {
    setShowLocations(false);
  }, locationsDropdown);
  useClickOutside(() => {
    setShowPetType(false);
  }, petTypeDropdown);
  useClickOutside(() => {
    setShowBreed(false);
  }, breedsDropdown);
  useClickOutside(() => {
    setShowGender(false);
  }, gendersDropdown);

  const handleAll = (e, index, setMethod, filterArray, setMethod2) => {
    if (!all[index]) {
      let array = all;
      array[index] = true;
      setAll(array);
      setMethod([e.target.value]);
      setMethod2(new Array(filterArray.length).fill(false));
    }
  };

  const handleFilters = (
    e,
    allIndex,
    allValue,
    checkbox,
    setCheckbox,
    filter,
    setFilter
  ) => {
    let state = filter[0].slice(0, 3);
    let array = filter;
    let box = checkbox;
    let allArray = all;
    if (!checkbox[e.target.id]) {
      if (state === "all") {
        setFilter([e.target.value]);

        box[e.target.id] = true;
        setCheckbox(box);

        allArray[allIndex] = false;
        setAll(allArray);
      } else {
        array = array.concat(e.target.value);
        setFilter(array);

        box[e.target.id] = true;
        setCheckbox(box);
      }
    } else {
      box[e.target.id] = false;
      setCheckbox(box);

      if (filter.length > 1) {
        array = array.filter((value) => value !== e.target.value);
        setFilter(array);
      } else {
        allArray[allIndex] = true;
        setAll(allArray);
        setFilter([allValue]);
      }
    }
  };

  const stringify = (array) => {
    let string = array.toString();
    string = string.replace(/-/g, " ");
    string = string.replace(/,/g, " ");
    return string;
  };

  useEffect(() => {
    const filterPuppies = () => {
      let sortedPuppies = allPuppies;
      if (!all[0]) {
        sortedPuppies = sortedPuppies.filter((puppy) => {
          return locationSorter.includes(puppy.Location);
        });
      }
      if (!all[1]) {
        sortedPuppies = sortedPuppies.filter((puppy) =>
          petTypeSorter.includes(puppy.PetType)
        );
      }
      if (!all[2]) {
        sortedPuppies = sortedPuppies.filter((puppy) =>
          breedSorter.includes(puppy.BreedName)
        );
      }
      if (!all[3]) {
        sortedPuppies = sortedPuppies.filter((puppy) =>
          genderSorter.includes(puppy.Gender)
        );
      }
      return changeFilteredPuppies(sortedPuppies);
    };
    filterPuppies();
  }, [
    locationSorter,
    petTypeSorter,
    breedSorter,
    genderSorter,
    all,
    allPuppies,
    changeFilteredPuppies,
  ]);
  return (
    <>
      {isMobile ? (
        <div className="subtitle-mobile">
          {" "}
          <span>FILTERS </span>
        </div>
      ) : (
        <div className="subtitle-mobile">
          <i className="fas fa-bars" /> <span>Filter By: </span>
        </div>
      )}
      <div className="filter-box">
        <span className="subtitle">
          <i className="fas fa-bars" /> <span>Filter By: </span>
        </span>
        <div className="filters">
          <div className="filter">
            <span className="label">location</span>
            <div ref={locationsDropdown} className="dropdown">
              <button
                className="dropdown-button"
                onClick={
                  !showLocations
                    ? (e) => setShowLocations(true)
                    : (e) => setShowLocations(false)
                }
              >
                <div className="dropdown-button-content">
                  <span>
                    {isTablet ? "Location" : stringify(locationSorter)}
                  </span>
                  <div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>
              </button>
              <div
                className={
                  !showLocations
                    ? "dropdown-content"
                    : "dropdown-content collapsed"
                }
              >
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        value="all locations"
                        onChange={(e) =>
                          handleAll(
                            e,
                            0,
                            setLocationSorter,
                            locations,
                            setLocationCheckbox
                          )
                        }
                        checked={all[0]}
                      />
                      <div className="checkbox-label">All Locations</div>
                    </label>
                  </li>
                  {locations.map((location, index) => {
                    return (
                      <li key={location}>
                        <label>
                          <input
                            type="checkbox"
                            onChange={(e) =>
                              handleFilters(
                                e,
                                0,
                                "all locations",
                                locationCheckbox,
                                setLocationCheckbox,
                                locationSorter,
                                setLocationSorter
                              )
                            }
                            id={index}
                            value={location}
                            name={location}
                            checked={locationCheckbox[index]}
                          />
                          <div className="checkbox-label">{location}</div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => setShowLocations(false)}
                  className="content-button"
                >
                  <span className="content-button-content">
                    &rarr; <span>apply filters</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="filter">
            <span className="label">pet type</span>
            <div ref={petTypeDropdown} className="dropdown">
              <button
                className="dropdown-button"
                onClick={
                  !showPetType
                    ? (e) => setShowPetType(true)
                    : (e) => setShowPetType(false)
                }
              >
                <div className="dropdown-button-content">
                  <span>
                    {isTablet ? "pet type" : stringify(petTypeSorter)}
                  </span>
                  <div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>
              </button>
              <div
                className={
                  !showPetType
                    ? "dropdown-content"
                    : "dropdown-content collapsed"
                }
              >
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        value="all pet types"
                        onChange={(e) =>
                          handleAll(
                            e,
                            1,
                            setPetTypeSorter,
                            types,
                            setPetTypeCheckbox
                          )
                        }
                        checked={all[1]}
                      />
                      <div className="checkbox-label">All Pet Types</div>
                    </label>
                  </li>
                  {types.map((type, index) => {
                    return (
                      <li key={type}>
                        <label>
                          <input
                            type="checkbox"
                            onChange={(e) =>
                              handleFilters(
                                e,
                                1,
                                "all pet types",
                                petTypeCheckbox,
                                setPetTypeCheckbox,
                                petTypeSorter,
                                setPetTypeSorter
                              )
                            }
                            id={index}
                            value={type}
                            name={type}
                            checked={petTypeCheckbox[index]}
                          />
                          <div className="checkbox-label">{type}</div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => setShowPetType(false)}
                  className="content-button"
                >
                  <span className="content-button-content">
                    &rarr; <span>apply filters</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="filter">
            <span className="label">breed</span>
            <div ref={breedsDropdown} className="dropdown">
              <button
                className="dropdown-button"
                onClick={
                  !showBreed
                    ? (e) => setShowBreed(true)
                    : (e) => setShowBreed(false)
                }
              >
                <div className="dropdown-button-content">
                  <span>{isTablet ? "breed" : stringify(breedSorter)}</span>
                  <div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>
              </button>
              <div
                className={
                  !showBreed ? "dropdown-content" : "dropdown-content collapsed"
                }
              >
                <ul className="breeds-list">
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        value="all breeds"
                        onChange={(e) =>
                          handleAll(
                            e,
                            2,
                            setBreedSorter,
                            breeds,
                            setBreedCheckbox
                          )
                        }
                        checked={all[2]}
                      />
                      <div className="checkbox-label">All Breeds</div>
                    </label>
                  </li>
                  {breeds.map((breed, index) => {
                    return (
                      <li key={breed}>
                        <label>
                          <input
                            type="checkbox"
                            onChange={(e) =>
                              handleFilters(
                                e,
                                2,
                                "all breed types",
                                breedCheckbox,
                                setBreedCheckbox,
                                breedSorter,
                                setBreedSorter
                              )
                            }
                            id={index}
                            value={breed}
                            name={breed}
                            checked={breedCheckbox[index]}
                          />
                          <div className="checkbox-label">{breed}</div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => setShowBreed(false)}
                  className="content-button"
                >
                  <span className="content-button-content">
                    &rarr; <span>apply filters</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="filter">
            <span className="label">gender</span>
            <div ref={gendersDropdown} className="dropdown">
              <button
                className="dropdown-button"
                onClick={
                  !showGender
                    ? (e) => setShowGender(true)
                    : (e) => setShowGender(false)
                }
              >
                <div className="dropdown-button-content">
                  <span>{isTablet ? "gender" : stringify(genderSorter)}</span>
                  <div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>
              </button>
              <div
                className={
                  !showGender
                    ? "dropdown-content"
                    : "dropdown-content collapsed"
                }
              >
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        value="all genders"
                        onChange={(e) =>
                          handleAll(
                            e,
                            3,
                            setGenderSorter,
                            genders,
                            setGenderCheckbox
                          )
                        }
                        checked={all[3]}
                      />
                      <div className="checkbox-label">All Genders</div>
                    </label>
                  </li>
                  {genders.map((gender, index) => {
                    return (
                      <li key={gender}>
                        <label>
                          <input
                            type="checkbox"
                            onChange={(e) =>
                              handleFilters(
                                e,
                                3,
                                "all gender types",
                                genderCheckbox,
                                setGenderCheckbox,
                                genderSorter,
                                setGenderSorter
                              )
                            }
                            id={index}
                            value={gender}
                            name={gender}
                            checked={genderCheckbox[index]}
                          />
                          <div className="checkbox-label">{gender}</div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => setShowGender(false)}
                  className="content-button"
                >
                  <span className="content-button-content">
                    &rarr; <span>apply filters</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Filters.propTypes = {
  changeSortedList: PropTypes.func,
  list: PropTypes.array,
};

export default Filters;
