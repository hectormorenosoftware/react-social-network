import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./Card.css";

class Card extends React.PureComponent {
  render() {
    const { image, title, text, style } = this.props;
    return (
      <div className="Card">
        <img src={image} alt={title} style={style} />
        <h3>{title}</h3>
        <h3>{text}</h3>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Card));
