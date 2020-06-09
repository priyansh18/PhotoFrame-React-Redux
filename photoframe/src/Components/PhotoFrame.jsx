import React, { Component } from "react";
import Photo from "./Photo";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

class PhotoFrame extends Component {
  render() {
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto" />
        <div className="photo-grid">
          {this.props.photoBlock.map((photo, index) => (
            <Photo
              key={index}
              onRemove={this.props.onRemove}
              finalPhoto={photo}
            />
          ))}
        </div>
        ;
      </div>
    );
  }
}

PhotoFrame.propTypes = {
  photoBlock: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PhotoFrame;
