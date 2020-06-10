import React, { Component } from "react";

class Comments extends Component {
  render() {
    return <div>
      <form className="comment-form">
        <input type="text" placeholder=" Add Comment"/>
        <input type="submit" hidden/>
      </form>
    </div>;
  }
}

export default Comments;
