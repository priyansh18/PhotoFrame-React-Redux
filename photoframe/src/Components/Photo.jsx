import React, { Component } from "react";

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
        <div className="button-container"><button className='remove-button' onClick={()=>onRemove(finalPhoto)}>Remove</button></div>
      </figure>
    );
  }
}

export default Photo;