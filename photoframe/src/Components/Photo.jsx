import React, { Component } from "react";
import PropTypes from 'prop-types';
import { removePhoto } from './../Redux/actions';

class Photo extends Component {
  render() {
    const { finalPhoto,onRemove } = this.props;
    return (
      <figure className="figure">
        <img
          className="photo"
          src={finalPhoto.imageLink}
          alt={finalPhoto.description}
        />
        <figcaption>
          <p>{finalPhoto.description}</p>
        </figcaption>
        <div className="button-container"><button className='remove-button' onClick={()=>{props.removePhoto(1)}}>Remove</button></div>
      </figure>
    );
  }
}

Photo.propTypes={
  finalPhoto:PropTypes.object.isRequired,
}

export default Photo;
