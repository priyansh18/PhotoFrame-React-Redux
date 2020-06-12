import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    const { finalPhoto, startRemovingPhoto, index, history, comments } = this.props;
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
          <button
            className="remove-button"
            onClick={() => {
              startRemovingPhoto(index,finalPhoto.id);
              history.push("/");
            }}
          >
            Remove
          </button>
          <Link className="button" to={`/single/${finalPhoto.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {comments[finalPhoto.id] ? comments[finalPhoto.id].length : 0}
            </div>
          </Link>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  finalPhoto: PropTypes.object.isRequired,
};

export default Photo;
