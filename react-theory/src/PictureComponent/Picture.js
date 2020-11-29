import React, { Component } from "react";
import "./Picture.css";

class Picture extends Component {
  // super({props})
  render(props) {
    const inputClasses = ["input"];

    if (this.props.name !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    if (this.props.name.length > 4) {
      inputClasses.push("bold");
    }

    return (
      <div className="basePic">
        <div className="pic">
          <h4>name: {this.props.name}</h4>
          <p>id: {this.props.id_pic}</p>
          {this.props.children}
          <input
            type="text"
            onChange={this.props.onChangeName}
            value={this.props.name}
            className={inputClasses.join(" ")}
          />
          {/* <button onClick={this.props.changeTitleButton}>click</button> */}
          <button onClick={this.props.onDelete}>delete</button>
        </div>
      </div>
    );
  }
}

export default Picture;
