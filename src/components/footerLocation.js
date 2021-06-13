import React from "react";
import PropTypes from "prop-types";

function FooterLocation(props) {
  return (
    <div className="store-card">
      <div className="location">
        <i className="fas fa-map-marker-alt" /> {props.location}
      </div>
      <div className="social-media">
        <div>
          <i className="fab fa-facebook-f" />
        </div>
        <div>
          <i className="fab fa-pinterest-p" />
        </div>
        <div>
          <i className="fab fa-instagram" />
        </div>
        <div>
          <i className="fab fa-youtube" />
        </div>
        <div>
          <i className="fab fa-twitter" />
        </div>
      </div>
      <div className="address">{props.address}</div>
      <div className="number">{props.number}</div>
      <hr />
      <div className="schedule">
        {props.schedule.days[0]}
        <div>
          <i className="far fa-clock" />
          {props.schedule.hours[0]}
        </div>
        {props.schedule.days[1] !== undefined && (
          <>
            <div>{props.schedule.days[1]}</div>
            <div>
              <i className="far fa-clock" />
              {props.schedule.hours[1]}
            </div>
          </>
        )}
      </div>
      {props.permitNumber && (
        <div className="permit-number">Permit Number: {props.permitNumber}</div>
      )}
      <hr className="mobile-store-line" />
    </div>
  );
}

FooterLocation.propTypes = {
  location: PropTypes.string,
  address: PropTypes.string,
  number: PropTypes.string,
  schedule: PropTypes.object,
  permitNumber: PropTypes.string,
};

export default FooterLocation;
