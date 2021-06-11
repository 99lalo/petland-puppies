import React, { useEffect } from "react";
import PropTypes from "prop-types";

function PuppyCard(props) {
  const axios = require("axios");

  useEffect(() => {
    axios
      .get(props.photo, {
        "Content-Type": "application/xml; charset=utf-8", mode:'cors'
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div>
      <img
        src={
          !props.photo
            ? props.photo
            : "https://www.petlandflorida.com/wp-content/themes/petland/assets/images/no-available.png"
        }
        alt="puppy"
      />
      {!props.videoUrl && (
        <div className="puppy-video">
          <img src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/PetlandFlorida_VideoIcon.svg" />
          <span>video</span>
        </div>
      )}
      <div>
        <div>
          <span>
            {props.petType}&#9679; {props.gender}&#9679; ref id: {props.petId}
            &#9679; {props.birthDate}
          </span>
          <hr />
          <div>
            <span>{props.petName}</span>&#9679;{props.breedName}
            <span className="location">
              <i className="fas fa-map-marker-alt" />
              {props.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

PuppyCard.propTypes = {
  photo: PropTypes.string,
  petType: PropTypes.string,
  gender: PropTypes.string,
  petId: PropTypes.number,
  birthDate: PropTypes.string,
  petName: PropTypes.string,
  breedName: PropTypes.string,
  location: PropTypes.string,
  videoUrl: PropTypes.string,
};

export default PuppyCard;
