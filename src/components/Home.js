import React from "react";
import { withRouter } from "react-router-dom";
import BurritoFoodImage from "../images/burrito.webp";
import PSImage from "../images/ps5.webp";
import PizzaImage from "../images/stuffed.jpg";
import OnnTVImage from "../images/onntv.webp";
import DoubleBurger from "../images/double.jpeg";

import Card from "./Card";

class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card title="@pizzahutt" image={PizzaImage} />
            <Card title="@chickfila" image={BurritoFoodImage} />
            <Card title="@playstation" image={PSImage} />
            <Card title="@onn" image={OnnTVImage} />
            <Card title="@mcdonalds" image={DoubleBurger} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
