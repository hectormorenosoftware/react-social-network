import React from "react";
import { withRouter } from "react-router-dom";
import AndroidLogo from "../images/androidlogo.jpeg";
import DominosLogo from "../images/dominos_logo.jpeg";
import WalmartLogo from "../images/walmartlogo.jpeg";

import Card from "./Card";

class Search extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="search-css">
          <input
            type="text"
            name="search-value"
            className="search-style"
            placeholder="Search for @username"
          />
        </div>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card title="@dominos" image={DominosLogo} />
            <Card title="@walmart" image={WalmartLogo} />
            <Card title="@android" image={AndroidLogo} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Search);
