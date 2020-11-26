import React, { Component } from "react";
import "./Picture.css";

class Picture extends Component {
  // super({props})
  render(props) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        <div className="pic">
          <h4>name: {this.props.name}</h4>
          <p>id: {this.props.id_pic}</p>
          {this.props.children}
          <input
            type="text"
            onChange={this.props.onChangeName}
            value={this.props.name}
          />
          {/* <button onClick={this.props.changeTitleButton}>click</button> */}
        </div>
      </div>
    );
  }
}

export default Picture;
