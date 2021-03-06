import React, { Component } from "react";
import PhotoFrame from "./PhotoFrame";
import AddPhoto from "./AddPhoto";
import { Link, Route } from "react-router-dom";
import Single from "./Single";

class Main extends Component {

  state={
    loading:true
  }
  componentDidMount(){
    this.props.startLoadingPhoto().then(()=>{
      this.setState({
        loading:false
      })
    })
    this.props.startLoadingComment()
  }
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

        <Route path="/single/:id" render={(params) => <Single loading={this.state.loading} {...this.props} {...params} />} />
      </div>
    );
  }
}

export default Main;
