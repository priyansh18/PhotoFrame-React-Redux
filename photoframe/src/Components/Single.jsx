import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const { match, allPhotos } = this.props;
    const id = Number(match.params.id);
    const photo = allPhotos.find((photo) => photo.id === id);
    console.log(photo);
    return (
      <div className="single-photo">
        <Photo finalPhoto={photo} />
        <Comments />
      </div>
    );
  }
}

export default Single;
