import React from "react";
import { withRouter } from "react-router-dom";

class Add extends React.PureComponent {
  render() {
    return (
      <div className="add-flex-box">
        <button className="add-button">Add Image</button>
      </div>
    );
  }
}

export default withRouter(Add);
