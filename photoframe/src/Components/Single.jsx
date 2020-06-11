import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const { match, allPhotos } = this.props;
    const id = Number(match.params.id);
    const photo = allPhotos.find((photo) => photo.id === id);
    console.log(photo);
    const comments = this.props.comments[match.params.id] || [];
    const index = this.props.allPhotos.findIndex((photo) => photo.id === id);
    return (
      <div className="single-photo">
        <Photo finalPhoto={photo} {...this.props} index={index} />
        <Comments
          addComment={this.props.addComment}
          comments={comments}
          id={id}
        />
      </div>
    );
  }
}

export default Single;
