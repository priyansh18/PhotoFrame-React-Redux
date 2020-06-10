import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const { match, allPhotos } = this.props;
    const id = Number(match.params.id);
    const photo = allPhotos.find((photo) => photo.id === id);
    console.log(photo);
    const comments = this.props.comments
    return (
      <div className="single-photo">
        <Photo finalPhoto={photo} />
        <Comments addComment={this.props.addComment} comments={comments} />
      </div>
    );
  }
}

export default Single;
