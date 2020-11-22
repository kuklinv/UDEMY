import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Picture from "./PictureComponent/Picture.js";
import SimpleComponent from "./SimpleESComponent/SimpleComponent.js";

class App extends Component {
  render() {
    const rootDivStyle = {
      textAlign: "center",
    };

    return (
      <div style={rootDivStyle}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "yellow" }}>Hello UDEMY React course</h1>
          <p style={{ color: "gray" }}>start at 11/22/2020</p>
          <span></span>
          <Picture name={"first pic"} id_pic={1} />
          <Picture name={"second pic"} id_pic={2}>
            <span style={{ color: "red" }}>children pic</span>
          </Picture>
          <span></span>
          <SimpleComponent />
        </header>
      </div>

      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h1>Hello UDEMY React course</h1>
      //       <p>start at 11/22/2020</p>
      //     </header>
      //   </div>
    );
  }
}

export default App;
