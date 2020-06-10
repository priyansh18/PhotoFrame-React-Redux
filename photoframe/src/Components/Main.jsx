import React, { Component } from "react";
import Title from "./Title";
import PhotoFrame from "./PhotoFrame";
import AddPhoto from "./AddPhoto";
import { Link, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">PhotoFrame</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoFrame {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => {
            return <AddPhoto {...this.props} onHistory={history} />;
          }}
        />
      </div>
    );
  }
}

export default Main;
