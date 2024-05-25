import React from "react";
import { withRouter } from "react-router-dom";
import BurritoFoodImage from "../images/burrito.webp";
import PSImage from "../images/ps5.webp";
import PizzaImage from "../images/stuffed.jpg";
import Card from "./Card";

class Favorites extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card title="@playstation" image={PSImage} />
            <Card title="@chickfila" image={BurritoFoodImage} />
            <Card title="@pizzahutt" image={PizzaImage} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Favorites);
