import React from "react";
import PropTypes from "prop-types";

function PuppyCard(props) {
  return (
    <div className="puppy-card">
      <img
        className="photo"
        src={
          "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg"
        }
        alt="puppy"
      ></img>
      {!props.videoUrl && (
        <div className="puppy-video">
          <img alt= "" src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/PetlandFlorida_VideoIcon.svg" />
          <span>video</span>
        </div>
      )}
      <div>
        <div className="puppy-description">
          <span className="puppy-description-top">
            {props.petType}&#9679; {props.gender}&#9679; ref id: {props.petId}
            &#9679; {props.birthDate}
          </span>
          <hr />
          <div className="puppy-description-bottom">
            <span className="puppy-name">{props.petName}</span>&#9679;{" "}
            {props.breedName}
            <div className="location">
              <i className="fas fa-map-marker-alt" />
              {"Location: " + props.location}
            </div>
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
