import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeRoute } from "../redux/actions/routeActions";
import AddImage from "../images/add.png";
import HeartImage from "../images/hearticon.png";
import HomeImage from "../images/home.png";
import UserImage from "../images/user.png";
import SearchImage from "../images/search.png";

class Navigation extends React.PureComponent {
  changeView = (route) => {
    const { changeRte } = this.props;

    changeRte(route);
  };
  render() {
    return (
      <div className="navbar-flex-box">
        <img
          src={HomeImage}
          className="img-navbar"
          onClick={this.changeView.bind(this, "home")}
        />
        <img
          src={HeartImage}
          className="img-navbar"
          onClick={this.changeView.bind(this, "favorites")}
        />
        <img
          src={AddImage}
          className="img-navbar"
          onClick={this.changeView.bind(this, "add")}
        />
        <img
          src={UserImage}
          className="img-navbar"
          onClick={this.changeView.bind(this, "user")}
        />
        <img
          src={SearchImage}
          className="img-navbar"
          onClick={this.changeView.bind(this, "search")}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRte: (route) => dispatch(changeRoute(route)),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
