import React from "react";
import { withRouter } from "react-router-dom";
import IronManImageOne from "../images/ironman.jpeg";
import IronManImageTwo from "../images/ironmantwo.jpeg";
import IronManImageThree from "../images/ironmanthree.webp";

import Card from "./Card";

class User extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="flex-box-username">
          <img src={IronManImageOne} className="img-user" />
          <p>@starkanthony</p>
          <p>Followers: 2,939,774</p>
          <p>Following: 2,939,774</p>
        </div>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card image={IronManImageTwo} />
            <Card image={IronManImageThree} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(User);
