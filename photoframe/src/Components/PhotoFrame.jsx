import React, { Component } from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PhotoFrame extends Component {
  render() {
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto" />
        <div className="photo-grid">
          {this.props.allPhotos
            .sort(function (x, y) {
              return y.id - x.id;
            })
            .map((photo, index) => (
              <Photo key={index} {...this.props} index={index} finalPhoto={photo} />
            ))}
        </div>
        ;
      </div>
    );
  }
}

PhotoFrame.propTypes = {
  allPhotos: PropTypes.array.isRequired,
};

export default PhotoFrame;
