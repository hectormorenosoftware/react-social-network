import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Favorites from "./Favorites";
import Home from "./Home";
import Add from "./Add";
import User from "./User";
import Search from "./Search";

class IndexPage extends React.PureComponent {
  renderView = (route) => {
    switch (route) {
      case "home":
        return <Home />;
      case "favorites":
        return <Favorites />;
      case "add":
        return <Add />;
      case "user":
        return <User />;
      case "search":
        return <Search />;
    }
  };
  render() {
    const { route } = this.props;

    return (
      <React.Fragment>
        <Navigation />
        {this.renderView(route)}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.routesReducer.route,
  };
}

export default withRouter(connect(mapStateToProps, null)(IndexPage));
