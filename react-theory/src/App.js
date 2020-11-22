import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Picture from "./Picture/Picture.js";
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
          <Picture />
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
