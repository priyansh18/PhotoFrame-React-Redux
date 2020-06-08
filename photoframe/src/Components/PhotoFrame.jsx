import React, { Component } from "react";
import Photo from './Photo';

class PhotoFrame extends Component {
  render() {
    return <div className="photo-grid">
      {this.props.photoBlock.map((photo,index)=><Photo key={index} finalPhoto={photo}/>)}
    </div>;
  }
}

export default PhotoFrame;
