import React, { Component } from "react";
import "./Picture.css";

class Picture extends Component {
  // super({props})
  render(props) {
    return (
      <div className="pic">
        <h4>name: {this.props.name}</h4>
        <p>id: {this.props.id_pic}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Picture;
