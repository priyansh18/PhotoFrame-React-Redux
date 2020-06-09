import React, { Component } from "react";
import Photo from './Photo';
import PropTypes from 'prop-types';

class PhotoFrame extends Component {
  render() {
    return <div className="photo-grid">
      {this.props.photoBlock.map((photo,index)=><Photo key={index} onRemove={this.props.onRemove} finalPhoto={photo}/>)}
    </div>;
  }
}

PhotoFrame.propTypes={
  photoBlock:PropTypes.array.isRequired,
  onRemove:PropTypes.func.isRequired
}

export default PhotoFrame;
