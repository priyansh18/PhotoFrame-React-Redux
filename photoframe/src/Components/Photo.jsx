import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    const { finalPhoto, removePhoto, index } = this.props;
    return (
      <figure className="figure">
        <Link to={`/single/${finalPhoto.id}`}>
          <img
            className="photo"
            src={finalPhoto.imageLink}
            alt={finalPhoto.description}
          />
        </Link>

        <figcaption>
          <p>{finalPhoto.description}</p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button" onClick={() => removePhoto(index)}>
            Remove
          </button>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  finalPhoto: PropTypes.object.isRequired,
};

export default Photo;
